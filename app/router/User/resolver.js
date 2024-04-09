const express = require('express');
const datasources = require('./datasources');

const router = express.Router();
router.get('/', async (req,res) => {
    try {
        const user = await datasources.find1();
        res.json(user);
    } catch (error) {
        res.end('Internal server error');
    } 
})
router.get('/:appId', async (req, res) => {
    const {appId} = req.params;
    try {
        const user = await datasources.find(appId);
        res.json(user);
    } catch (error) {
        res.end('Internal server error');
    } 
});

router.post('/', async (req, res) => {
    const user = req.body;
    try {
        const createuser = await datasources.create(user);
        console.log(createuser);
        res.json(createuser);
    } catch (error) {
        res.json(error);
    }
})
router.put('/:appID', async (req,res)=>{
    const user = req.body;
    const {appID} = req.params;
    try{
        const updateuser = await datasources.update({appID,user});
        console.log(updateuser);
        res.json(updateuser);
    } catch(error) {
        res.json(error);
    }
})
router.delete('/:appID',async (req,res)=>{
    const {appID} = req.params;
    console.log(appID);
    try{
        const deleteuser = await datasources._delete(appID);
        // console.log(deleteuser);
        res.json(deleteuser);
    } catch(error) {
        res.json(error);
    }
})
module.exports = router;