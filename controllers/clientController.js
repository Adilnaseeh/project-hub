const {Client}=require('../models');
require('dotenv').config();

exports.createClient=async(req,res)=>{
    try{
        const {name,copmanyname,email,phone,status,project}=req.body;
        const client= await Client.create({name,copmanyname,email,phone,status,project});
        res.status(201).json({message:'client created'})
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.editClient=async(req,res)=>{
     try{
            const client=await Client.findByPk(req.params.id);
            if(!client) return res.status(404).json({message:" client  not found"});
            
            await client.update(req.body);
            res.json({message:'updated successfully'})
        }
        catch (err){
            res.status(500).json({error:err.message})
        }
};

exports.getOneClient=async(req,res)=>{
    try{
        const client=await Client.findByPk(req.params.id);
        if (!client) return res.status(404).json({message:'client not found'});
        res.json(client);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }
};

exports.deleteClient=async(req,res)=>{
    try{
        const client=await Client.findByPk(req.params.id);
        if (!client) return res.status(404).json({message:'client not found'});
        
        await client.destroy(req.body);
        res.json({message:'deleted successfully'});

    }catch{
        res.status(500).json({error:err.message})
    }
}