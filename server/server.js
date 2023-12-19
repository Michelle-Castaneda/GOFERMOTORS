const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// app.get('/', async (req, res) => {
//     try {
//         res.sendFile(path.join(__dirname, '../public/index.html'));
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

//endpoints
const {
    getInventory,
    getReviews,
    createContact,
    getUserAdmin,
    sellCar,
    addCar, 
    deleteCar
} = require('./controllers/controller.js');

const  {seed } = require('./controllers/seed.js');

const { login, register } = require('./controllers/auth.js');

app.get("/car_inventory", getInventory);
app.get("/user_reviews", getReviews);
app.get("/users/:username", getUserAdmin)

app.post('/seed', seed);
app.post("/register", register);
app.post("/login", login);
app.post("/contact_information", createContact)
app.post("/car_inventory", addCar)

app.delete("/car_inventory/:carId", deleteCar)

app.put("/car_inventory/:carId", sellCar)


const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
