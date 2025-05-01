const {Task}=require('../models');
require('dotenv').config();

exports.createTask = async (req, res) => {
    try {
      const { title, team, project, duedate,status,notes } = req.body;
      const task = await Task.create({ title, team, project, duedate,status,notes });
      res.status(201).json({ message: '',});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.editTask=async(req,res)=>{
    try{
        const task=await Task.findByPk(req.params.id);
        if(!task) return res.status(404).json({message:''});
        
        await task.update(req.body);
        res.json({message:''})
    }
    catch (err){
        res.status(500).json({error:err.message})
    }

};

exports.getOneTask=async(req,res)=>{
    try{
        const task=await Task.findByPk(req.params.id);
        if(!task) return res.status(404).json({message:''});
        res.json({task})
    }
    catch (err){
        res.status(500).json({error:err.message})
    }

};

exports.deleteTask=async(req,res)=>{
    try{
        const task=await Task.findByPk(req.params.id);
        if(!task) return res.status(404).json({message:''});
        
        await task.destroy(req.body);
        res.json({message:''})
    }
    catch (err){
        res.status(500).json({error:err.message})
    }

};

