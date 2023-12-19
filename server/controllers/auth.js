require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { sequelize } = require("../util/database");

const createToken = (username, isadmin, id) => {
  return jwt.sign(
    {
      username,
      isadmin,
      id,
    },
    SECRET,
    {
      expiresIn: "2 days",
    }
  );
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [foundUserArr] = await sequelize.query(`
    SELECT * FROM users
    WHERE username = '${username}'
    LIMIT 1
  `);

    if (foundUserArr[0]) {
      const [foundUser] = foundUserArr;
      const isAuthenticated = bcrypt.compareSync(password, foundUser.password);

      if (isAuthenticated) {
        const token = createToken(foundUser.username, foundUser.isadmin, foundUser.user_id);
        const exp = Date.now() + 1000 * 60 * 60 * 48;
        console.log(foundUser);
        const data = {
          username: foundUser.username,
          isadmin: foundUser.isadmin,
          userId: foundUser.user_id,
          token: token,
          exp: exp,
        };

        res.status(200).send(data);
      } else {
        res.status(400).send("Password is incorrect");
      }
    } else {
      res.status(400).send("User does not exist.");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [existingUserArr] = await sequelize.query(
      `
      SELECT * FROM users
      WHERE username = '${username}'
      LIMIT 1
    `
    );

    const [adminFound] = await sequelize.query(
      `
        SELECT * FROM users
      `
    );

    if (existingUserArr[0]) {
      res.status(400).send("Username is not available");
    } else if(adminFound[0]){
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const [newUserArr] = await sequelize.query(
        `
        INSERT INTO users(username, isAdmin, password)
        VALUES('${username}', '${false}', '${hash}')
        RETURNING user_id, isAdmin, username
      `
      );
      const [newUser] = newUserArr;
      const token = createToken(newUser.username, newUser.user_id);
      const exp = Date.now() + 1000 * 60 * 60 * 48;

      const data = {
        username: newUser.username,
        userId: newUser.user_id,
        token: token,
        exp: exp,
      };
      console.log(newUser);
      console.log(data);
      res.status(200).send(data);
    }else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
  
        const [newUserArr] = await sequelize.query(
          `
          INSERT INTO users(username, isAdmin, password)
          VALUES('${username}', '${true}', '${hash}')
          RETURNING user_id, isAdmin, username
        `
        );
        const [newUser] = newUserArr;
        const token = createToken(newUser.username, newUser.isadmin, newUser.user_id);
        const exp = Date.now() + 1000 * 60 * 60 * 48;
  
        const data = {
          username: newUser.username,
          isadmin: newUser.isadmin,
          userId: newUser.user_id,
          token: token,
          exp: exp,
        };
        console.log(newUser);
        console.log(data);
        res.status(200).send(data);
      }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  login,
  register,
};
