const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconnection');

const Project=sequelize.define('Project',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    budget:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'pending'
    },
    duedate:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    client:{
        type: DataTypes.INTEGER,
        references: {
          model: 'Client',
          key: 'id',
        },
        allowNull: false,
      
    }
})

module.exports=Project;