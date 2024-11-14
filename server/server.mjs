import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// import bookRoutes from './routes/books.mjs';
import authorRoutes from './routes/authors.mjs';
// import tagRoutes from './routes/tags.mjs';


dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the API!'); // Basic welcome message
});

// app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
// app.use('/api/tag', tagRoutes);
// app.use('/api/customerpreferreddeliverytimes', customerPreferredDeliveryTimesRoutes);
// app.use('/api/customercontacts', customerContactsRoutes);


app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
