const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// In-memory user database (for demonstration,we will use firebase here)
const users = [];

app.get('/', (req, res) => {
    res.sendFile('LoginPage.html', { root: __dirname });
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Implement user registration logic and add the user to the 'users' array
    users.push({ username, email, password });
    res.redirect('/');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Implement user authentication logic to check if the user exists
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('Login successful');
    } else {
        res.send('Login failed');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});