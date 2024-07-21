import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://yashsharma25032003:yashsharma25032003@cluster0.i5hcxdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-app').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.