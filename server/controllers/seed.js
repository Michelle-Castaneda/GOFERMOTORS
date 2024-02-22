const { sequelize } = require("../util/database");

module.exports = {
  seed: async (req, res) => {
    try {
      await sequelize.transaction(async (t) => {
        await sequelize.query(
          `
          DROP TABLE IF EXISTS contact_information;
          DROP TABLE IF EXISTS car_inventory;
          DROP TABLE IF EXISTS users;
          `,
          { transaction: t }
        );

        await sequelize.query(
          `
          
          CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            isAdmin BOOLEAN DEFAULT false,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(200) NOT NULL
          );
          
          CREATE TABLE car_inventory (
            car_id SERIAL PRIMARY KEY,
            make VARCHAR(100),
            model VARCHAR(30),
            sticker_price TEXT,
            year INTEGER,
            mileage VARCHAR(20),
            color VARCHAR(20),
            interior_color VARCHAR(20),
            body_type VARCHAR(20),
            title VARCHAR(20),
            engine TEXT,
            vin_number VARCHAR(30),
            stock_number VARCHAR(15),
            description TEXT,
            sold BOOLEAN DEFAULT false
          );
          
          CREATE TABLE contact_information (
            contact_id SERIAL PRIMARY KEY,
            first_name VARCHAR(200),
            last_name VARCHAR(200),
            phone VARCHAR(20),
            email VARCHAR(50),
            comments TEXT,
            car_id INTEGER,
            FOREIGN KEY (car_id) REFERENCES car_inventory (car_id)
          );
          `,
          { transaction: t }
        );

        await sequelize.query(
          `
          INSERT INTO car_inventory ( make, model, sticker_price, year, mileage, color, interior_color, body_type, title, engine, vin_number, stock_number, description) 
          VALUES 
          ('Kia', 'Forte', '$2,000-$3,000', 2018, '57,000', 'Black', 'Black', 'Sedan', 'Clean Title', '2', '3KPFK4A72JE180386', '180386', 'Working AC'),
          ('Jeep', 'Renegade', '$2,500-$3,500', 2018, '132,048', 'Green', 'Black', 'SUV', 'Clean Title', '2.4', 'ZACCJABB5JPH60547', 'H60547', 'Working AC'),
          ('Mitsubishi', 'Mirage', '$1,500', 2019, '50,796', 'Red', 'Black', 'Hatchback', 'Clean Title', '1.2', 'ML32A3HJ9KH010988', '010988', 'Working AC'),
          ('Mitsubishi', 'Mirage G4', '$1,500', 2021, '85,931', 'Silver', 'Beige', 'Sedan', 'Clean Title', '1.2', 'ML32FUFJ7MHF00992', 'F00992', 'Working AC'),
          ('Mitsubishi', 'Mirage G4', '$1,500', 2020, '66,000', 'Blue', 'Black', 'Sedan', 'Clean Title', '1.2', 'ML32F4FJXLHF02685', 'F02685', 'Working AC'),
          ('Ford', 'Escape', '$2,000', 2014, '70,000', 'Gray', 'Gray', 'SUV', 'Clean Title', '1.6', 'FMCU0GX4EUC04087', 'C04087', 'Working AC'),
          ('Chevrolet', 'Trax', '$2,000', 2017, '164,247', 'Burgundy', 'Black', 'Sedan', 'Clean Title', '1.4', '3GNCJKSB6HL265645', '265645', 'Working AC'),
          ('Buick', 'Encore', '$2,000', 2016, '122,135', 'Blue', 'Black', 'SUV', 'Clean Title', '1.4', 'KL4CJ1SM0GB614622', '614622', 'Working AC'),
          ('Jeep', 'Renegade', '$2,500', 2020, '84,288', 'Black', 'Black', 'Sedan', 'Clean Title', '2.4', 'ZACNJABB6LPL50638', 'L50638', 'Working AC'),
          ('BMW', '328i', '$2,900', 2015, '92,314', 'Black', 'Black', 'Sedan', 'Clean Title', '2', 'WBA3ZA5G56FNP34935', 'P34935', 'Working AC');
          
          INSERT INTO contact_information (first_name, last_name, phone, email, comments, car_id)
          VALUES
          ('John', 'Doe', '123-456-7890', 'john@example.com', 'Great service!', 1)

          `,
          { transaction: t }
        );
      });

      console.log("DB seeded!");
      res.sendStatus(200);
    } catch (err) {
      console.error("Error seeding DB", err);
      res.status(500).send("Internal Server Error");
    }
  },
};