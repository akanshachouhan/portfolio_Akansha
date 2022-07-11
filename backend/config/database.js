import mongoose from "mongoose";

export const connentDatabase =()=>{
    mongoose.connect(process.env.MONGO_URI).then(c=>{
        console.log(`Mongo connect to ${c.connection.host}`);
    })
    .catch((e)=>{
        console.log(e)
    })
};