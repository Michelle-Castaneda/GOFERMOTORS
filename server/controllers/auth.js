const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { sequelize } = require("../util/database");

const createToken = (username, isAdmin, userId) => {
  return jwt.sign(
    {
      username,
      isAdmin,
      userId,
    },
    SECRET,
    {
      expiresIn: process.env.TOKEN_EXPIRATION || "2 days",
    }
  );
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [foundUser] = await sequelize.query(`
      SELECT * FROM users
      WHERE username = $1
      LIMIT 1
    `, [username]);

    if (foundUser) {
      const isAuthenticated = bcrypt.compareSync(password, foundUser.password);

      if (isAuthenticated) {
        const token = createToken(foundUser.username, foundUser.isadmin, foundUser.user_id);
        res.status(200).send({ token });
      } else {
        res.status(400).send("Password is incorrect");
      }
    } else {
      res.status(400).send("User does not exist.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("An error occurred during login.");
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [existingUser] = await sequelize.query(
      `
      SELECT * FROM users
      WHERE username = $1
      LIMIT 1
    `, [username]
    );

    if (existingUser) {
      res.status(400).send("Username is not available");
      return;
    }

    const isAdmin = !!(await sequelize.query("SELECT * FROM users LIMIT 1"))[0].length;

    const salt = bcrypt.genSaltSync(12); // Increase cost factor for bcrypt
    const hash = bcrypt.hashSync(password, salt);

    const [newUser] = await sequelize.query(
      `
      INSERT INTO users(username, isAdmin, password)
      VALUES($1, $2, $3)
      RETURNING user_id, isAdmin, username
    `, [username, isAdmin, hash]
    );

    const token = createToken(newUser.username, newUser.isadmin, newUser.user_id);
    res.status(200).send({ token });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("An error occurred during registration.");
  }
};

module.exports = {
  login,
  register,
};
