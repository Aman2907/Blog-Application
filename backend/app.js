import express from 'express'
import mongoose from 'mongoose'
import router from "./routes/user-routes.js";
import blogRouter from "./routes/bblog-routes.js";
import cors from 'cors';

  
  
const app = express()
app.use(cors()) 
app.use(express.json())
app.use("/api/user", router); 
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb+srv://amandeo2907:k7RiOAggcDQqyysY@cluster0.idktepw.mongodb.net/blogging')
.then(() => app.listen(5000))
.then(() => console.log("Connected to database and listening to 5000"))
.catch((err) => console.log(err));


