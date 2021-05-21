const mysql = require("mysql");
//const db = require("../../hospitaldatabase/routes/db");
var db;
function database() {
     db = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: "root",
        password: "",
        database: "blogdatabase"
    });
    db.connect((error) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("mysql connected ....");
        }
    });
    return db;
}

function db1(query1,id) {
    return new Promise((resolve, reject) => {
        db.query(query1,id,
            (err, result) => {
                return err ? reject(err) : resolve(result);
            }
        );
    });
}
module.exports = {
    database,
    db1
};