const express = require('express');
const datasources = require('./datasources');

const router = express.Router();
router.get('/', async (req,res) => {
    try {
        const machine = await datasources.find1();
        res.json(machine);
    } catch (error) {
        res.end('Internal server error');
    } 
})
router.get('/:appId', async (req, res) => {
    const {appId} = req.params;
    try {
        const machine = await datasources.find(appId);
        res.json(machine);
    } catch (error) {
        res.end('Internal server error');
    } 
});

router.post('/', async (req, res) => {
    const machine = req.body;
    try {
        const createMachine = await datasources.create(machine);
        console.log(createMachine);
        res.json(createMachine);
    } catch (error) {
        res.json(error);
    }
})
router.patch('/:appID',async (req,res)=>{
    const machine = req.body;
    const {appID} = req.params;
    try{
        const updateMachine = await datasources.update(appID,machine);
        console.log(updateMachine);
        res.json(updateMachine);
    } catch(error) {
        res.json(error);
    }
})
router.delete('/:appID',async (req,res)=>{
    const {appID} = req.params;
    console.log(appID);
    try{
        const deleteMachine = await datasources._delete(appID);
        console.log(deleteMachine);
        res.json(deleteMachine);
    } catch(error) {
        res.json(error);
    }
})
module.exports = router;