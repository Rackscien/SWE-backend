const express = require('express');
const datasources = require('./datasources');

const router = express.Router();
router.get('/', async (req,res) => {
    try {
        const adjuster = await datasources.find1();
        res.json(adjuster);
    } catch (error) {
        res.end('Internal server error');
    } 
})
router.get('/:appId', async (req, res) => {
    const {appId} = req.params;
    try {
        const adjuster = await datasources.find(appId);
        res.json(adjuster);
    } catch (error) {
        res.end('Internal server error');
    } 
});

router.post('/', async (req, res) => {
    const adjuster = req.body;
    try {
        const createAdjuster = await datasources.create(adjuster);
        console.log(createAdjuster);
        res.json(createAdjuster);
    } catch (error) {
        res.json(error);
    }
})
router.patch('/:appID', async (req,res)=>{
    const adjuster = req.body;
    const {appID} = req.params;
    try{
        const updateAdjuster = await datasources.update(appID,adjuster);
        console.log(updateAdjuster);
        res.json(updateAdjuster);
    } catch(error) {
        res.json(error);
    }
})
router.delete('/:appID',async (req,res)=>{
    const {appID} = req.params;
    console.log(appID);
    try{
        const deleteAdjuster = await datasources._delete(appID);
        // console.log(deleteMachine);
        res.json(deleteAdjuster);
    } catch(error) {
        res.json(error);
    }
})
module.exports = router;