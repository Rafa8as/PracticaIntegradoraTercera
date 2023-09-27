import mongoose from "mongoose";
import config from "../src/config/enviroment.config.js";
import logger from "../src/utils/logger.util.js";


const mongoUrl = config.MONGO_URL;

const environment = async ()=>{
    try{
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log ("mongo connected");
        logger.info('Mongo connected')

    }catch (err) {
        logger.error (`Mongo error: ${err}`);
        console.log("mongo error:", err);

    };
};

export default environment;