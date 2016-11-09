var express = require('express');
var bodyParser = require('body-parser');

var cors = require('cors');
var userCtrl = require('./controller');

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
var corsOptions = {
  origin: 'http://localhost:3000'
}

app.get('/api/users', userCtrl.allUsers);
app.get('/api/users/admin', userCtrl.adminUsers);
app.get('/api/users/moderator', userCtrl.moderatorUsers);
app.get('/api/users/user', userCtrl.userUsers);
app.get('/api/users/:id', userCtrl.singleUser);
app.post('/api/users', userCtrl.newUser);
app.post('/api/users/admin', userCtrl.newAdmin);
app.post('/api/users/language/:id', userCtrl.changeLang);
app.post('/api/users/forums/:id', userCtrl.addFavorite);
app.delete('/api/users/forums/:id', userCtrl.removeFavorite);
app.delete('/api/users/:id', userCtrl.banUser);
app.put('/api/users/:id', userCtrl.updateUser);

app.listen(3000, function(){
  console.log("listening on port 3000");
});

module.exports = {app}
