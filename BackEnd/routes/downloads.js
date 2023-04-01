const express = require('express')
const Download = require('../models/downloadModel')

const router = express.Router()

router.get('/', (req,res) => {
    res.json({msg:"Get all downloads"})
})

//get single download
router.get('/:id', (req,res) => {
    res.json({msg:"Get single download"})
})

//POST a download
router.post('/', async (req,res) => {
    const {username, templateID, template} = req.body

    try{
        const download = await Download.create({username, templateID, template})
        res.status(200).json(download)
    } catch (error) {
        res.status(400).json({error: error.message} )

    }
    // res.json({msg:"Post a new single download"})
})

//DELETE a download
router.delete('/:id', (req,res) => {
    res.json({msg:"Delete a single download"})
})

//Update a download
router.patch('/:id', (req,res) => {
    res.json({msg:"Update a single download"})
})

module.exports = router