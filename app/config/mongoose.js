// const mongoose = require('mongoose');
// require('dotenv').config();
// const url = process.env.MONGO_URL;
// const INIT = async () => {
//     await mongoose.connect(url).then(console.log('Server : Mongoose Connected'));
// };

// module.exports = INIT;

const mongoose = require("mongoose");
const _dotenv = require('dotenv');
_dotenv.config();
const url = process.env.MONGO_URL;
const INIT = async () => {
    await mongoose.connect(url)
    .then(console.log('connented database'))
    .catch((err)=> console.log(err));
}
module.exports = INIT;