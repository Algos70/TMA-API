const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Database connection successfully established: ${con.connection.host}`);
    } catch(error) {
        console.log(error);
    }
}

module.exports = connectDB;