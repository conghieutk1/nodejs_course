const connection = require('../config/database.js');
const {
    getAllUsers,
    getUserById,
    editUserById,
    deleteUserById,
} = require('../services/CRUDService.js');

const getA = (req, res) => {
    res.send('A');
};

const getHieudang = (req, res) => {
    res.render('sample.ejs');
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    // console.log('>>> row: ', results);
    return res.render('home.ejs', { listUsers: results });
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log('>>> DATA: ', req.body);
    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('Created user succeed !');
    //         //console.log(results);
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
    );
    console.log('>>> Results: ', results);
    res.send('Created user succeed !');
};

const getEditPage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', { userEdit: user });
};

const postEditUser = async (req, res) => {
    let { email, name, city, userId } = req.body;
    await editUserById(email, name, city, userId);
    // res.send('Edited user succeed !');
    res.redirect('/');
};

// const getDeleteUser = async (req, res) => {
//   const userId = req.params.id;
//   let user = await getUserById(userId);
// };

const DeleteUser = async (req, res) => {
    const userId = req.params.id;
    await deleteUserById(userId);
    // res.send('Edited user succeed !');
    res.redirect('/');
};

module.exports = {
    getHomepage,
    getA,
    getHieudang,
    postCreateUser,
    postEditUser,
    getEditPage,
    getCreatePage,
    DeleteUser,
};
