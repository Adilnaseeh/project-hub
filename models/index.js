const sequelize = require('../config/dbconnection');
const User = require('./usermodel');
const Project=require('./projectmodel');
const Task=require('./task');
const Client=require('./clientmodel');
const Calender=require('./calendermodel');
const Team=require('./team')

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Project=Project;
db.Task=Task;
db.Client=Client;
db.Calender=Calender;
db.Team=Team

module.exports = db;
