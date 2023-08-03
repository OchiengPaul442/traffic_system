const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const app = express();
const Port = 8081;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

// Route to register a user
app.post('/register', (req, res) => {
    const sql = 'INSERT INTO users SET ?';
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        Gender: req.body.Gender,
        Username: req.body.Username,
        Password: req.body.Password,
        NumberPlate: req.body.NumberPlate,
    };
    db.query(sql, user, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

// Route to get all the users
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

// Route to add a user
app.post('/users', (req, res) => {
    const sql = 'INSERT INTO users SET ?';
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Gender: req.body.Gender,
        dob: req.body.dob,
        Role: req.body.Role,
        profilePhoto: req.body.profilePhoto,
        Username: req.body.Username,
        Password: req.body.Password,
    };
    db.query(sql, user, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});


// Route to delete a user
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE userId = ${id}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});