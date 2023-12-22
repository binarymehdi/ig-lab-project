const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lab-ig-app-db',
    password: 'Mehdi0507',
    port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    const { customercode, firstname, lastname } = request.body
    pool.query('INSERT INTO customer (customercode, firstname,lastname) VALUES ($1, $2,$3)', [customercode, firstname, lastname], (error,
        results) => {
        if (error) {
            throw error
        }
        response.status(201).send('customerAdded')
    })
}

// writing to the database
const createPost = (request, response) => {
    const { title, body, userId } = request.body
    pool.query('INSERT INTO posts (title, body, userId) VALUES ($1, $2,$3)', [title, body, userId], (error,
        results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Post Added')
    })
};

// reading from the database:
const getPosts = async (request, response) => {
    try {
        const postsResult = await pool.query('SELECT * FROM posts');
        const usersResult = await pool.query('SELECT * FROM users');

        const posts = postsResult.rows;
        const users = usersResult.rows;

        const data = { posts: posts, users: users };
        response.status(200).json(data);
        console.log(data);
    } catch (error) {
        console.error(error);
        response.status(500).send('Server Error');
    }
};

module.exports = {
    getUsers,
    createUser,
    createPost,
    getPosts,
}