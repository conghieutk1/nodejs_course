const connection = require('../config/database.js');
const { getAllUsers } = require('../services/CRUDService.js');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    console.log('>>> row: ', results);
    return res.render('home.ejs', { listUsers: results });
};

const getA = (req, res) => {
    res.send('A');
};

const getHieudang = (req, res) => {
    res.render('sample.ejs');
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getEditUser = (req, res) => {
    res.render('edit.ejs');
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log('>>> DATA: ', req.body);

    // let {email, name, city} = req.body;

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

module.exports = {
    getHomepage,
    getA,
    getHieudang,
    postCreateUser,
    getEditUser,
    getCreatePage,
};
