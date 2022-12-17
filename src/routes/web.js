const express = require('express');
const router = express.Router();
const {
    getHomepage,
    getA,
    getHieudang,
    postCreateUser,
    getCreatePage,
    getEditUser,
} = require('../controllers/homeController.js');

router.get('/', getHomepage);
router.get('/a', getA);
router.get('/hieudang', getHieudang);
router.get('/create', getCreatePage);
router.get('/edit', getEditUser);

router.post('/create-user', postCreateUser);

module.exports = router;
