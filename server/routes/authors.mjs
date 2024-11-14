import express from 'express';
import { createClient } from '@supabase/supabase-js';

import dotenv from 'dotenv'

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabaseClient = createClient(supabaseUrl, supabaseKey);

const router = express.Router();

// POST
router.post('/', async (req, res) => {
    const { firstname, lastname } = req.body;
    try {
        const { data: dataname, error } = await supabaseClient
            .from('authors')
            .insert([{firstname, lastname}]);
        if (error) throw error;
        res.status(201).json(dataname); // Respond with created facility data
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ error: error.message });
    }
});

// GET route
router.get('/', async (req, res) => {
    try {
        const { data: authorData, error } = await supabaseClient
            .from('authors')
            .select('*');
        if (error) {
            throw error;
        }
        res.json(authorData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT
router.put('/:authorid', async (req, res) => {
    const { authorid } = req.params; 
    const { firstname, lastname } = req.body;
    try {
        const { data: authorIDData, error } = await supabaseClient
            .from('authors')
            .update({firstname, lastname})
            .eq('authorid', authorid);
        if (error) throw error;
        res.status(200).json(authorIDData);
    } catch (error) {
        console.error('Error updating variable:', error);
        res.status(500).json({ error: error.message });
    }
});

// DELETE route
router.delete('/:authorid', async (req,res) => {
    const { authorid } = req.params;
    try {
        const { data: dataname, error } = await supabaseClient
            .from('authors')
            .delete()
            .eq('authorid', authorid);
        if (error) throw error;
        res.status(200).json({message: `Variable with ID ${authorid} deleted successfully.`, dataname})
    } catch (error) {
        console.error('Error deleting variable:', error);
        res.status(500).json({ error: error.message });
    }
})




export default router; // Export the router