const express = require('express');
const router = express.Router();

const { addData, getUserData } = require('../controllers/userData');

router.get('/data/:userId', getUserData);
router.post('/data/add', addData);

module.exports = router;