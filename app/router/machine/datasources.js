const model = require("./model");

const find1 = async() => {
    const machine = await model.find();
    return machine;
}
const find = async(appID) => {
    const machine = await model.find({id:appID});
    return machine;
}

const create = async (machine) => {
    const {id, name, assignedToAdjuster,status} = machine; 
    const newmachine = await model.create({
        id,
        name,
        assignedToAdjuster,
        status
    });

    return newmachine;
}

const update = async (id,machine) => {
    const res = await model.findByIdAndUpdate(id,machine);
    return res;
}
const _delete = async(id) => {
    try {
        const deletedItem = await model.findByIdAndDelete(id);
        console.log('Deleted item:', deletedItem);
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}   
module.exports = {
    create,
    find,
    find1,
    update,
    _delete
}