const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'super_secret_key',
  resave: true,
  saveUninitialized: true
}));

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

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send('Не заполнены все обязательные поля');
    return;
  }

  const checkQuery = 'SELECT * FROM new_table WHERE username = ? AND password = ?';
  connection.query(checkQuery, [username, password], (err, result) => {
    if (err) {
      console.error('Ошибка выполнения SQL-запроса:', err);
      res.sendStatus(500); 
      return;
    }

    if (result.length === 0) {
      res.status(401).send('Неверное имя пользователя или пароль');
      return;
    }

    const user = result[0];
    req.session.username = user.username;

    res.redirect('http://127.0.0.1:3000/index.html');;
  });
});

app.get('/', (req, res) => {
  if (!req.session.username) {
    res.redirect('/login');
    return;
  }

  res.send(`Добро пожаловать, ${req.session.username}!`);
});

const port = 5004;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
