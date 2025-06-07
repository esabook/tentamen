import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOD_URI);
        const db = conn.connection

        db.on('open', console.info.bind(console, 'Database connection: open'))
            .on('close', console.info.bind(console, 'Database connection: close'))
            .on('disconnected', console.info.bind(console, 'Database connection: disconnecting'))
            .on('disconnected', console.info.bind(console, 'Database connection: disconnected'))
            .on('reconnected', console.info.bind(console, 'Database connection: reconnected'))
            .on('fullsetup', console.info.bind(console, 'Database connection: fullsetup'))
            .on('all', console.info.bind(console, 'Database connection: all'))
            .on('error', console.error.bind(console, 'MongoDB connection: error:'));

        console.log(`Mongod connected: ${db.host}:${db.port}`);
    } catch (error) {
        console.log("Mongod connction error: ", error);
    }
};