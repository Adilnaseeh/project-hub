const {Calender}=require('../models');
require('dotenv').config();

exports.createCalender=async(req,res)=>{
    try{
        const {title,startdate,lastdate,project}=req.body;
        const calender= await Calender.create({title,startdate,lastdate,project});
        res.status(201).json({message:''})
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};


exports.editCalender=async(req,res)=>{
     try{
            const calender=await Calender.findByPk(req.params.id);
            if(!calender) return res.status(404).json({message:""});
            
            await calender.update(req.body);
            res.json({message:'updated successfully'})
        }
        catch (err){
            res.status(500).json({error:err.message})
        }
};

exports.deleteCalender=async(req,res)=>{
    try{
           const calender=await Calender.findByPk(req.params.id);
           if(!calender) return res.status(404).json({message:""});
           
           await calender.destroy(req.body);
           res.json({message:''})
       }
       catch (err){
           res.status(500).json({error:err.message})
       }
};


exports.getOneCalender=async(req,res)=>{
    try{
           const calender=await Calender.findByPk(req.params.id);
           if(!calender) return res.status(404).json({message:""});
           
           
           res.json(calender)
       }
       catch (err){
           res.status(500).json({error:err.message})
       }
};