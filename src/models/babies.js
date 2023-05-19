
const express =require('express')
const mongoose = require('mongoose')

const babiesSchema = new mongoose.Schema({
   
      name:{
        type:String,
        required:true,
        trim:true
     },  
     dob:{
        type:Date,
        required:true,
        trim:true
     },  
     gender:{
        type:String,
        //boolea:true,
        //required:true,
        trim:true
     },  
     weight:{
        type:Number,
        required:true,
        trim:true
     },  
     height:{
        type:Number,
        required:true,
        trim:true
     },  
})

//Here We are creating Collection of Babies
const Babies = new mongoose.model("Babies",babiesSchema)

module.exports = Babies;