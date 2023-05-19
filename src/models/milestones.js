
const express = require('express')
const mongoose = require('mongoose')

const milestonesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
     }, 
     description:{
        type:String,
        required:true,
        trim:true
     },
     date:{
        type:Date,
        required:true,
        trim:true
     }
})

//Here We are creating Collection of dietPlan
const Milestones = new mongoose.model("Milestones",milestonesSchema)
module.exports = Milestones;