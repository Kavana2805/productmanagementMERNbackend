const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true,
            
        })
        console.log("MongoDB connected successfully")
    }
    catch (error) {
        console.log("MongoDB Connection Failed: ", error);
        process.exit(1);
    }
};