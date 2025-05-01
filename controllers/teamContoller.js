const {Team}=require('../models');
require('dotenv').config();

exports.createTeam = async (req, res) => {
    try {
      const { name,members,project } = req.body;
      const team = await Team.create({ name,members,project });
      res.status(201).json({ message:'',});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};


exports.editTeam = async (req, res) => {
    try {
      const team = await Team.findByPk(req.params.id);
      if(!team) return res.status(404).json({message:''});

      await Team.update(req.body)
      res.json({message:''})

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.getOneTeam = async (req, res) => {
    try {
      const team = await Team.findByPk(req.params.id);
      if(!team) return res.status(404).json({message:''});
      
      res.json(team)

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};


exports.deleteTeam = async (req, res) => {
    try {
      const team = await Team.findByPk(req.params.id);
      if(!team) return res.status(404).json({message:''});
      
      await Team.destroy(req.body)
      res.json({message:''})

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};