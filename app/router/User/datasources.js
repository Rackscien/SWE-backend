const model = require("./model");

const find1 = async() => {
    const user = await model.find();
    return user;
}
const find = async(appID) => {
    const user = await model.find({id:appID});
    return user;
}

const create = async (user) => {
    const {name, email,password, type} = user; 
    const newuser = await model.create({
        name,
        email,
        password,
        type
    });

    return newuser;
}

const update = async ({id,user}) => {
    const res = await model.findOneAndUpdate(id,user);
    return res;
}
const _delete = async(id) => {
    try {
        const deletedItem = await model.findOneAndDelete(id);
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