const experss = require('express');
const router = experss.Router();
const Task= require('../models/task');

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch{
        res.status(500).json({message: err.message});


    }    
});

router.post('/tasks', async (req,res)=>{
    try{
        const task= new Task(req.body);
        await task.save();
        res.status(200).json({message:'Task created successfully',task});

    } catch(err){
        res.status(400).json({message: err.message});



    }


})


router.put('/tasks/:id', async (req,res)=>{
    try{
        const {id}= req.params;
        const dataToUpdate= req.body;
        const task= await Task.findByIdAndUpdate(id,dataToUpdate,{new:true});
        res.status(200).json({message:"Task updated successfully",task});
    
    }
        catch(err){
            res.status(400).json({message: err.message});
        }
    })

router.delete('/tasks/:id', async (req,res)=>{
    try{
        const {id}= req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({message:"Task deleted successfully"});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})
module.exports = router;