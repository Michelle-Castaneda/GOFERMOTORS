const { sequelize } = require("../util/database");

module.exports = {
  seed: async (req, res) => {
    try {
      await sequelize
        .query(
                `
                    DROP TABLE IF EXISTS users;
                    DROP TABLE IF EXISTS contact_information;
                    DROP TABLE IF EXISTS car_inventory;

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
                        sticker_price INTEGER,
                        year INTEGER,
                        mileage INTEGER,
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
                    
                    INSERT INTO car_inventory ( make, model, sticker_price, year, mileage, color, interior_color, body_type, title, engine, vin_number, stock_number, description) 
                    VALUES 
                    ('Dodge', 'Journey', 5500, 2014, 2300, 'Red', 'Black', 'Sedan', 'Clean', 'I3', '123456789', '6789', 'Had just one owner and has many upgrades'),
                    ('Ford', 'Escape', 6500, 2018, 95500, 'Black', 'Tan', 'SUV/Crossover', 'Clean', 'Hybrid', '1236547', '6547', 'This compact SUV is great for weekend getaways!'),
                    ('Kia', 'Rio', 6900, 2015, 200500, 'Grey', 'Black', 'Pick up Truck', 'Clean', 'H4', '8956327', '6327', 'Had just one owner and has many upgrades'),
                    ('Buick', 'Encore', 4500, 2014, 290000, 'Black', 'Black', 'Minivan', 'Clean', 'I4', '7458961', '8961', 'Had just one owner and has many upgrades'),
                    ('Buick', 'Verano', 7400, 2014, 150000, 'Grey', 'Black', 'Sedan', 'Clean', 'I4', '1254896', '4896', 'Had just one owner and has many upgrades'),
                    ('Dodge', 'Dart', 6900, 2016, 198458, 'White', 'Black', 'Sedan', 'Clean', 'K5', '56487945', '7945', 'Had just one owner and has many upgrades'),
                    ('Nissan', 'Altima', 6500, 2014, 189400, 'White', 'Black', 'Sedan', 'na', 'Hybrid', '1235469', '5469', 'Had just one owner and has many upgrades'),
                    ('Hyundai', 'Elantra', 5800, 2017, 152400, 'Grey', 'Black', 'Convertible', 'Clean', 'V6', '5412378', '2378', 'Had just one owner and has many upgrades'),
                    ('BMW', '328', 4500, 2015, 231000, 'White', 'Black', 'Coupe', 'Clean', 'V6', '6543781', '3781', 'Had just one owner and has many upgrades'),
                    ('BMW', 'X3', 4500, 2017, '143500', 'Grey', 'Black', 'SUV/Crossover', 'Clean', 'V8', '6751983', '1983', 'Had just one owner and has many upgrades'),
                    ('Range Rover', 'Evoque', 4500, 2013, 182500, 'Blue', 'Grey', 'Wagon', 'Mended', 'V6 Turbo', '4571827', '1827', 'Had just one owner and has many upgrades'),
                    ('Mitsubishi', 'Mirage', 4500, 2019, 95000, 'Blue', 'Tan', 'Hatchback', 'Clean', 'V6', '4478145', '8145', 'Had just one owner and has many upgrades');
  
          `
        )
        .then(() => {
          console.log("DB seeded!");
          res.sendStatus(200);
        })
        .catch((err) => {
          console.log("error seeding DB", err);
        });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  },
};
