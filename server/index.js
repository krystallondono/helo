require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})

// Endpoints for logging in and registering a new user! 

app.post('/api/auth/register', ctrl.register);
app.post('/api/auth/login', ctrl.login);
app.get('/api/auth/logout', ctrl.logout);

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));