const {DataTypes}=require('sequelize');
const sequelize=require('../config/dbconnection');

const Calender=sequelize.define('Calender',{
    title:{
        type:DataTypes.STRING,
    },
    startdate:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    lastdate:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    project:{
        type:DataTypes.STRING,
        references:{
            model:'Project',
            key:'id'
        }
    }
})

module.exports=Calender;