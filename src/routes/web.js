const express = require('express');
const axios = require('axios');
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
// router.get('/a', getA);
router.get('/hieudang', getHieudang);
router.get('/create', getCreatePage);
router.get('/edit/:id', getEditPage);

router.post('/create-user', postCreateUser);
router.post('/edit-user', postEditUser);
router.get('/delete/:id', DeleteUser);

router.get('/a', async (req, res) => {
    try {
        // Gửi yêu cầu HTTP để lấy dữ liệu từ một API bên ngoài
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const posts = response.data;

        // Render template EJS với dữ liệu lấy được
        res.render('test_axios', { posts });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Internal Server Error');
    }
});

// API để lấy nội dung bài viết theo ID
router.get('/api/posts/:id', async (req, res) => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
        );
        const post = response.data;
        res.json(post);
    } catch (error) {
        console.error('Error fetching post data from API:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
