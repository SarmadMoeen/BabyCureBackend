
const express = require('express');
const router = new express.Router();

const Babies = require('../models/babies')



//Here we will handle post request for add babies
router.post("/Babies", async (req, res) => {

    console.log("route hit")
    //let result = req.body.radioButtons.find((e)=> e.selected === true )
    //let result2 = req.body.radioGroup.find((e)=>e.selected === true)
    try {
        const addingBabiies = new Babies()
        addingBabiies.name = req.body.name;
        addingBabiies.dob = req.body.date;
        addingBabiies.gender = req.body.value;
        //addingBabiies.gender = result2.value
        addingBabiies.weight = req.body.weight;
        addingBabiies.height = req.body.height;
        

        try {
            const insertBabies = await addingBabiies.save()
            console.log(insertBabies)
            res.status(201).send(insertBabies)

        }
        catch (e) {
            console.log(e);
        }
    } catch (e) {
        res.send(e)
    }

})

//Here we handle the get Request forbabies
router.get("/getBabies", async (req, res) => {
    try {
        const getBabies = await Babies.find({})
        res.send(getBabies)
    } catch (e) {
        res.send(e)
    }
})

//Here we handle the get Request for a specific babies
router.get("/getBabies/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getBaby = await Babies.find({ _id })
        res.send(getBaby)
    } catch (e) {
        res.send(e)
    }
})
//Here we handle the Patch  Request for a specific babies
router.patch("/updateBabies/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const updateBaby = await Babies.findByIdAndUpdate({ _id }, req.body, { new: true })
        res.send(updateBaby)
    } catch (e) {
        res.send(e)
    }
})
router.delete("/deleteBabies/:id", async (req, res) => {
    try {
        const deleteBaby = await Babies.findByIdAndDelete(req.params.id)
        res.send(deleteBaby)
    } catch (e) {
        res.send(e)
    }
})

module.exports = router;
