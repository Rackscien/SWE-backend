const model = require("./model");

const find1 = async() => {
    const adjuster = await model.find();
    return adjuster;
}
const find = async(appID) => {
    const adjuster = await model.find({_id:appID});
    return adjuster;
}

const create = async (adjuster) => {
    const { name, email,password,assigned_machine,status} = adjuster; 
    const newadjuster = await model.create({
        name,
        email,
        password,
        assigned_machine,
        status
    });

    return newadjuster;
}

const update = async (id,adjuster) => {
    const res = await model.findByIdAndUpdate(id,adjuster);
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