const express = require('express');
const router = express.Router();
const {
    getHomepage,
    getA,
    getHieudang,
    getCreatePage,
    postCreateUser,
    getEditPage,
    postEditUser,
    DeleteUser,
} = require('../controllers/homeController.js');

router.get('/', getHomepage);
router.get('/a', getA);
router.get('/hieudang', getHieudang);
router.get('/create', getCreatePage);
router.get('/edit/:id', getEditPage);

router.post('/create-user', postCreateUser);
router.post('/edit-user', postEditUser);
router.get('/delete/:id', DeleteUser);

module.exports = router;
