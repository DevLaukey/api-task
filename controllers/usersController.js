const usersData = require("../MOCK_DATA.json");
const mssql = require("mssql");
const sqlConfig = require("../config/config");
const { user } = require("../config/config");
const poolPromise = require("../config/poolPromise");

module.exports = {
  home: (req, res) => res.send("It feels good to be 127.0.0.1"),

  singleUser: async (req, res) => {
    const { email } = req.params;
    let pool = await poolPromise();

    pool
      .query(`select * FROM Users WHERE email = '${email}'`)
      .then((results) => {
        results
          ? res.status(200).json({
              status: 200,
              success: true,
              message: "success",
              results: results.recordset,
            })
          : res.status(404).json({
              status: 404,
              success: false,
              message: "not found",
              results: {},
            });
      });
  },

  allUsers: async (req, res) => {
    let pool = await poolPromise();
    pool.query(`select * FROM Users`).then((results) => {
      console.log(results.recordset);
      res.json({
        status: 200,
        success: true,
        message: "success",
        results: results.recordset,
      });
    });
  },
  login: async(req, res) => {
    const { email, Password } = req.body;
    let pool = await poolPromise();
    pool.query(`SELECT email,passwords FROM Users WHERE email = '${email}' `)
      .then((results) => {
        console.log(results.recordset);
        if (results.recordset.length > 0) {
          if (results.recordset[0].passwords === Password) {
            res.json({
              status: 200,
              success: true,
              message: "logged In",
              results: results.recordset[0].username,
            });
          } else {
            res.json({
              status: 401,
              success: false,
              message: "wrong password",
              results: {},
            });
          }
        }
      });
  },

  create: async (req, res) => {
    let { id, first_name, last_name, email, gender, Password } = req.body;
    let pool = await poolPromise();
    pool
      .query(
        `insert into Users
                        VALUES('${id}', '${first_name}', '${last_name}', '${email}', '${gender}', '${Password}')`
      )
      .then((results) => {
        if (results.rowsAffected) {
          res.send("user added");
          console.log("user added");
        }
      });
  },
};
