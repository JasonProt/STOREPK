const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gera1994',
  database: 'mydatabase'
});

connection.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно установлено');
  }
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).send('Не заполнены все обязательные поля');
    return;
  }

  const checkQuery = 'SELECT * FROM new_table WHERE username = ? OR email = ?';
  connection.query(checkQuery, [username, email], (err, result) => {
    if (err) {
      console.error('Ошибка выполнения SQL-запроса:', err);
      res.sendStatus(500);
      return;
    }

    if (result.length > 0) {
      res.status(400).send('Пользователь с таким именем пользователя или адресом электронной почты уже существует');
      return;
    }

    const insertQuery = 'INSERT INTO new_table (username, email, password) VALUES (?, ?, ?)';
    connection.query(insertQuery, [username, email, password], (err, result) => {
      if (err) {
        console.error('Ошибка выполнения SQL-запроса:', err);
        res.sendStatus(500);
      } else {
        console.log('Пользователь успешно добавлен в базу данных');
        res.redirect('http://127.0.0.1:3000/index.html');
      }
    });
  });
});

const port = 5003;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
