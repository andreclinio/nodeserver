const mongoose = require('mongoose');

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const HOST = process.env.MONGO_HOST;
const PORT = process.env.MONGO_PORT;
const DATABASE = process.env.MONGO_DATABASE;

const URI = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connect = () => {
    try {
        console.log(">> Connection on Mongo:", URI);
        mongoose.connect(URI, OPTIONS);
        mongoose.connection.on('error', (err) => { console.error("###", err) });
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = {
    connect: connect
}


