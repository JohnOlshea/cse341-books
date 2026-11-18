import express from 'express';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Root route - returns JSON, not HTML
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Server is running' });
});

export default app;