const {Project}=require('../models');
require('dotenv').config();

exports.createProject = async (req, res) => {
    try {
      const { title, description, client, duedate,status,budget } = req.body;
      const project = await Project.create({ title, description, client, duedate,status,budget });
      res.status(201).json({ message: 'Project created successfully',});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.getAllProject= async(req,res)=>{
    try{
        const project=await Project.findAll();
        res.status(201).json(project);
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
};

exports.editProject=async(req,res)=>{
    try{
        const project=await Project.findByPk(req.params.id);
        if(!project) return res.status(404).json({message:" project not found"});
        
        await project.update(req.body);
        res.json({message:'updated successfully'})
    }
    catch (err){
        res.status(500).json({error:err.message})
    }

};

exports.getOneProject=async(req,res)=>{
    try{
        const project=await Project.findByPk(req.params.id);
        if (!project) return res.status(404).json({message:'project not found'});
        res.json(project);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }
};

exports.deleteProject=async(req,res)=>{
    try{
        const project=await Project.findByPk(req.params.id);
        if (!project) return res.status(404).json({message:'not found'});
        
        await project.destroy();
        res.json({message:'deleted successfully'});
    }
    catch(err){
        res.status(500).json({error:err,message});
    }
    
}

