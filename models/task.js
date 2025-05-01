const {DataTypes}=require('sequelize');
const sequelize=require('../config/dbconnection');

const Task=sequelize.define('Task',{
    id:{
       type:DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement:true 
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    staus:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'pending'
    },
    duedate:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    notes:{
        type:DataTypes.CHAR
    },
    team:{
        type:DataTypes.CHAR,
        references:{
            model:'Team',
            key:'id'
        },
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

module.exports=Task;