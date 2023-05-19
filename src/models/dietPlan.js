
const express = require('express')
const mongoose = require('mongoose')

const dietPlanSchema = new mongoose.Schema({
    title:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Category'
     }, 
     description:{
        type:String,
        required:true,
        trim:true
     }
})

//Here We are creating Collection of dietPlan
const DietPlan = new mongoose.model("DietPlan",dietPlanSchema)
module.exports = DietPlan;