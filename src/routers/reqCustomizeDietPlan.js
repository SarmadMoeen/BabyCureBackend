
const express = require('express');
const router = new express.Router();

const RequestCustomizeDietPlan = require('../models/reqCustomizeDietPlan')



//Here we will handle post request for add Milestones
router.post("/postReqCustomizeDietPlan", async (req,res)=>{
    try{
        const addingReqCustomizeDietPlan = new RequestCustomizeDietPlan()
        addingReqCustomizeDietPlan.name = req.body.name;
        addingReqCustomizeDietPlan.age = req.body.age;
        addingReqCustomizeDietPlan.weight = req.body.weight;
        addingReqCustomizeDietPlan.description = req.body.cause;

        try{
            const insertReqCustomizeDietPlan = await addingReqCustomizeDietPlan.save()
            console.log(insertReqCustomizeDietPlan)
            res.status(201).send(insertReqCustomizeDietPlan)
    
        }
        catch(e){
            console.log(e);
        }
    }catch(e){
        res.send(e)
    }
})
    /*//Here we handle the get Request for Milestones
    router.get("/getMilestones", async (req,res)=>{
        try{
                const getMilestones = await Milestones.find({})
                res.send(getMilestones)
        }catch(e){
            res.send(e)
        }
    })

    //Here we handle the get Request for a specific Milestone
    router.get("/getMilestones/:id", async (req,res)=>{
    try{
            const _id = req.params.id
            const getMilestone= await Milestones.find({_id})
            res.send(getMilestone)
    }catch(e){
        res.send(e)
    }
})

//Here we handle the patch request for Milestone
   
    router.patch("/updateMilestones/:id", async (req,res)=>{
    try{
                const _id = req.params.id
                const updateMilestone = await Milestones.findByIdAndUpdate({_id} ,req.body,{new:true})
                res.send(updateMilestone)
    }catch(e){
            res.send(e)
    }
})

    router.delete("/deleteMilestones/:id", async (req,res)=>{
    try{
            const deleteMilestone = await Milestones.findByIdAndDelete(req.params.id)
            res.send(deleteMilestone)
    }catch(e){
        res.send(e)
    }
})*/

module.exports = router;
