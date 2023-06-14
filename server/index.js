const express = require('express')
const app = express()
const mongoose = require('mongoose');
var cors = require('cors')
const userRouter = require('./src/router/user')


const connectDB = async()=>{
  try{
      await mongoose.connect(`mongodb://127.0.0.1:27017/ecommerce`);
      console.log("Connected");
  }catch(error){
      console.log("Something when wrong");
      handlerError(error);
  }
}
connectDB();

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`Example app listening on port http://localhost:${process.env.PORT ?? 3000}`)
})