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
app.post('/login', (req, res) => {
    const { username, password } = req.body
    db.query(
        'SELECT * FROM users WHERE Username = ?',
        [username],
        (error, results) => {
            if (error) {
                console.error('Error fetching user from the database:', error)
                return res.status(500).send({ error: 'An error occurred' })
            } else if (results.length > 0) {
                const user = results[0]

                if (password === user.Password) {
                    console.log('Passwords match. Login successful.')
                    // prepare data for the response
                    const data = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        dob: user.dob,
                        Gender: user.Gender,
                        Role: user.Role,
                        profilePhoto: user.profilePhoto,
                        Username: user.Username,
                    }

                    return res.send({
                        message: 'Login successful',
                        status: 200,
                        data,
                    })
                } else {
                    console.log('Passwords do not match. Login failed.')
                    return res
                        .status(401)
                        .send({ error: 'Invalid username or password' })
                }
            } else {
                console.log('User not found. Login failed.')
                return res
                    .status(401)
                    .send({ error: 'Invalid username or password' })
            }
        }
    )
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
            if (existingUser.length > 0) {
                return res
                    .status(409)
                    .json({ message: 'Username already taken' })
            } else {
                // Generate random UUID for userId and motoristId
                const userId = uuidv4().slice(0, 10)
                const motoristId = uuidv4().slice(0, 10)

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
                    Password: req.body.password, // Use the password directly (no hashing)
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

// Add Clerk
app.post(
    '/addClerk',
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
        check('route').notEmpty().withMessage('Route is required'),
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
            if (existingUser.length > 0) {
                return res
                    .status(409)
                    .json({ message: 'Username already taken' })
            } else {
                // Generate random UUID for userId and motoristId
                const userId = uuidv4().slice(0, 5)
                const clerkId = uuidv4().slice(0, 5)

                // Prepare data for "users" table
                const user = {
                    userId,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    dob: req.body.dob,
                    Gender: req.body.Gender,
                    Role: 'Clerk',
                    profilePhoto: 'https://picsum.photos/200',
                    Username: req.body.username,
                    Password: req.body.password, // Use the password directly (no hashing)
                }

                // Insert user data into the "users" table
                const userSql = 'INSERT INTO users SET ?'
                await db.query(userSql, user)

                // Prepare data for "clerks" table
                const clerk = {
                    clerkId,
                    routes: req.body.route,
                    userId,
                }

                // Insert clerk data into the "clerks" table
                const clerkSql = 'INSERT INTO data_clerks SET ?'
                await db.query(clerkSql, clerk)

                res.send({
                    message: 'Clerk added successfully',
                    status: 200,
                })
            }
        } catch (error) {
            console.error('Error adding clerk:', error)
            res.status(500).json({
                error: 'An error occurred while adding the clerk',
            })
        }
    }
)

// Get all clerks
app.get('/clerks', (req, res) => {
    const query = `
        SELECT 
            u.profilePhoto ,
            CONCAT(u.firstName, ' ', u.lastName) AS name,
            u.dob,
            u.Gender,
            u.Username ,
            c.clerkId,
            c.routes
        FROM users u
        INNER JOIN data_clerks c ON u.userId = c.userId
    `
    db.query(query, (error, clerksData) => {
        if (error) {
            console.error('Error getting clerks:', error.message)
            console.error(error.stack)
            res.status(500).json({
                status: 'error',
                message: 'An error occurred while getting clerks',
                details: error.message,
            })
        } else {
            res.status(200).json({
                status: 'success',
                data: clerksData,
            })
        }
    })
})

// Delete clerk
app.delete('/deleteClerk/:clerkId', (req, res) => {
    const { clerkId } = req.params
    const query = 'DELETE FROM data_clerks WHERE clerkId = ?'
    db.query(query, [clerkId], (error, result) => {
        if (error) {
            console.error('Error deleting clerk:', error.message)
            console.error(error.stack)
            res.status(500).json({
                status: 'error',
                message: 'An error occurred while deleting clerk',
                details: error.message,
            })
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Clerk deleted successfully',
            })
        }
    })
})

// Add Route
app.post(
    '/addRoute',
    [
        check('routeName').notEmpty().withMessage('Route Name is required'),
        check('numberOfLanes')
            .notEmpty()
            .withMessage('number Of Lanes are required'),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            // Check if the route already exists in the database
            const existingRoute = await db.query(
                'SELECT * FROM routes WHERE routeName = ?',
                [req.body.routeName]
            )
            if (existingRoute.length > 0) {
                return res.status(409).json({ message: 'Route already exists' })
            } else {
                // Generate random UUID for routeId
                const routeId = uuidv4().slice(0, 5)

                // Prepare data for "routes" table
                const route = {
                    routeId,
                    Name: req.body.routeName,
                    no_lanes: req.body.numberOfLanes,
                    location: 'Kawempe',
                    // generate random mgrId
                    mgrId: uuidv4().slice(0, 5),
                }

                // Insert route data into the "routes" table
                const routeSql = 'INSERT INTO roads SET ?'
                await db.query(routeSql, route)

                res.send({
                    message: 'Route added successfully',
                    status: 200,
                })
            }
        } catch (error) {
            console.error('Error adding route:', error)
            res.status(500).json({
                error: 'An error occurred while adding the route',
            })
        }
    }
)

// Get all routes
app.get('/routes', (req, res) => {
    const query = `
        SELECT
            r.routeId,
            r.Name,
            r.no_lanes
        FROM roads r
    `
    db.query(query, (error, routesData) => {
        if (error) {
            console.error('Error getting routes:', error.message)
            console.error(error.stack)
            res.status(500).json({
                status: 'error',
                message: 'An error occurred while getting routes',
                details: error.message,
            })
        } else {
            res.status(200).json({
                status: 'success',
                data: routesData,
            })
        }
    })
})

// Delete route
app.delete('/deleteRoute/:routeId', (req, res) => {
    const { routeId } = req.params
    const query = 'DELETE FROM roads WHERE routeId = ?'
    db.query(query, [routeId], (error, result) => {
        if (error) {
            console.error('Error deleting route:', error.message)
            console.error(error.stack)
            res.status(500).json({
                status: 'error',
                message: 'An error occurred while deleting route',
                details: error.message,
            })
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Route deleted successfully',
            })
        }
    })
})

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`)
})
