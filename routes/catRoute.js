'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'), catController.cat_create_post);

router.post('/', (req, res) => {
    res.send('With this endpoint you can add cats.');
});

router.put('/', (req, res) => {
    res.send('With this endpoint you can modify cats.');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.');
});

module.exports = router;
