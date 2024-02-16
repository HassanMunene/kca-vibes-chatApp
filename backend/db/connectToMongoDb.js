import mongoose from 'mongoose';

const connectToMongoDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('connected to mongoDB');
    } catch(error) {
        console.log("failed to connect to mongo db", error.message)
    }
}

export default connectToMongoDb;
