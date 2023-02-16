const exportedData = require ('./config/database');
exportedData.cnx.query('CREATE DATABASE IF NOT EXISTS todo_db', (err) => {
    if (err) throw err;
    console.log('Database is created')
})

exportedData.cnx.query('USE todo_db', (err) => {
    if (err) throw err;
    console.log('Database is selected')
})

exportedData.cnx.query('CREATE TABLE IF NOT EXISTS task_tb (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, field_one VARCHAR(20) NOT NULL DEFAULT "toto")', (err) => {
    if (err) throw err;
    console.log('Table is created')
})
