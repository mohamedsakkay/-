const mysql = require('mysql');
const connectToDB = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database : "todo_db"
    }
)

connectToDB.connect ((err) =>
    {
        if (err) {
            throw err;
        }
console.log("MySql connected !")
})

exports.cnx = connectToDB;
