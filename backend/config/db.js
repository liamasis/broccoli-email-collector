const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://liam123:warybag@cluster0.ke8oimh.mongodb.net/?retryWrites=true&w=majority');
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;