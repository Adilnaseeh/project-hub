const {DataTypes}=require('sequelize');
const sequelize=require('../config/dbconnection');

const Client=sequelize.define('Client',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    companyname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        validate: {
        isEmail: true
        },
        allowNull:false,
        unique:true
    },
    phone:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    status:{
        type:DataTypes.ENUM('active','inactive'),
        allowNull:false,
        defaultValue:'active'
    },
    project:{
        type:DataTypes.STRING,
        references:{
            model:'Project',
            key:'id'
        }
    }
   

    
})

module.exports=Client;