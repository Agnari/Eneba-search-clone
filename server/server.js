const express = require('express');
const cors = require('cors');
const db = require('./db'); // Ensure your db.js is in the same folder
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Allows your React frontend to communicate with this API
app.use(express.json());

// Main List & Search Endpoint
app.get('/list', async (req, res) => {
    const { search } = req.query;
    console.log("Incoming search query:", search);

    try {
        // Updated Query: Added p.platform_logo to the SELECT statement
        let queryText = `
            SELECT 
                g.id, 
                g.game_name, 
                g.price, 
                g.discount, 
                g.discount_value, 
                g.wishlist_count, 
                g.cashback, 
                g.cashback_value, 
                g.game_picture,
                p.platform, 
                p.platform_logo, 
                r.region 
            FROM public.game_key g
            JOIN public.platform_list p ON g.platform_id = p.id
            JOIN public.region_list r ON g.region_id = r.id
        `;

        let values = [];

        if (search && search.trim() !== "") {
            queryText += ` WHERE g.game_name % $1 OR g.game_name ILIKE $2`;
            values.push(search, `%${search}%`);
        }

        queryText += ` ORDER BY g.id ASC`;

        const result = await db.query(queryText, values);

        // Debug: Log the first row to ensure platform_logo is coming through
        if (result.rows.length > 0) {
            console.log("Sample Data sent to Frontend:", result.rows[0]);
        }

        res.json(result.rows);
    } catch (err) {
        console.error("Database Error:", err.message);
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Try visiting http://localhost:${PORT}/list`);
});