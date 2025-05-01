const {DataTypes}=require('sequelize');
const sequelize=require('../config/dbconnection');

const Team=sequelize.define('Team',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    members:{
        type:DataTypes.STRING,
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

module.exports=Team