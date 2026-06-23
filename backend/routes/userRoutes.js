const express = require('express');
const router = express.Router();

// User routes are grouped here so server.js stays focused
// on application setup instead of feature-specific endpoints.
router.get('/', (req, res) => {
    res.json([
        {
            id: 1,
            name: "Eric"
        }
    ]);
});

module.exports = router;

    