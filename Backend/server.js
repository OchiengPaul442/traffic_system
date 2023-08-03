const { check, validationResult } = require('express-validator')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')
const express = require('express')
const db = require('./config/db')
const cors = require('cors')
const app = express()
const Port = 8081

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})

// Login user
app.post('/login', async (req, res) => {
    try {
        // Check if the username exists in the database
        const existingUser = await db.query(
            'SELECT * FROM users WHERE Username = ?',
            [req.body.username]
        )
        if (existingUser.count === 0) {
            return res.status(404).json({ message: 'User not found' })
        } else {
            // Check if the password is correct
            const passwordMatch = await bcrypt.compare(
                req.body.password,
                existingUser[0].Password
            )
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid password' })
            } else {
                // Prepare data for the response
                const user = {
                    userId: existingUser[0].userId,
                    firstName: existingUser[0].firstName,
                    lastName: existingUser[0].lastName,
                    dob: existingUser[0].dob,
                    Gender: existingUser[0].Gender,
                    Role: existingUser[0].Role,
                    profilePhoto: existingUser[0].profilePhoto,
                    Username: existingUser[0].Username,
                }

                res.send({
                    message: 'Login successful',
                    status: 200,
                    user,
                })
            }
        }
    } catch (error) {
        console.error('Error logging in user:', error)
        res.status(500).json({
            error: 'An error occurred while logging in the user',
        })
    }
})

// Register a user
app.post(
    '/register',
    [
        check('firstName').notEmpty().withMessage('First Name is required'),
        check('lastName').notEmpty().withMessage('Last Name is required'),
        check('dob').notEmpty().withMessage('Date of Birth is required'),
        check('Gender').notEmpty().withMessage('Gender is required'),
        check('username').notEmpty().withMessage('Username is required'),
        check('password')
            .notEmpty()
            .withMessage('Password is required')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long'),
        check('numberPlate').notEmpty().withMessage('Number Plate is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            // Check if the username already exists in the database
            const existingUser = await db.query(
                'SELECT * FROM users WHERE Username = ?',
                [req.body.username]
            )
            if (existingUser.count > 0) {
                return res
                    .status(409)
                    .json({ message: 'Username already taken' })
            } else {
                // Generate random UUID for userId and motoristId
                const userId = uuidv4().slice(0, 10)
                const motoristId = uuidv4().slice(0, 10)

                // Hash the password before storing it in the database
                const hashedPassword = await bcrypt.hash(req.body.password, 10)

                // Prepare data for "users" table
                const user = {
                    userId,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    dob: req.body.dob,
                    Gender: req.body.Gender,
                    Role: 'Motorist',
                    profilePhoto: 'https://picsum.photos/200',
                    Username: req.body.username,
                    Password: hashedPassword,
                }

                // Insert user data into the "users" table
                const userSql = 'INSERT INTO users SET ?'
                await db.query(userSql, user)

                // Prepare data for "motorists" table
                const motorist = {
                    motoristId,
                    d_permitNo: '123456789',
                    vehicle_no_plate: req.body.numberPlate,
                    userId,
                }

                // Insert motorist data into the "motorists" table
                const motoristSql = 'INSERT INTO motorists SET ?'
                await db.query(motoristSql, motorist)

                res.send({
                    message: 'User registered successfully',
                    status: 200,
                })
            }
        } catch (error) {
            console.error('Error registering user:', error)
            res.status(500).json({
                error: 'An error occurred while registering the user',
            })
        }
    }
)

// Get all the users
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users'
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        res.send(result)
    })
})

// Add a user
app.post('/users', (req, res) => {
    const sql = 'INSERT INTO users SET ?'
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Gender: req.body.Gender,
        dob: req.body.dob,
        Role: req.body.Role,
        profilePhoto: req.body.profilePhoto,
        Username: req.body.Username,
        Password: req.body.Password,
    }
    db.query(sql, user, (err, result) => {
        if (err) {
            throw err
        }
        res.send(result)
    })
})

// Delete a user
app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM users WHERE userId = ${id}`
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        res.send(result)
    })
})

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`)
})
