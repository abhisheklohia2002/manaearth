const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const mongoose = require("mongoose")
const router = require("./routes/AllRoutes");
app.use(cors())
app.use(express.json());
app.use("/api",router);

mongoose.connect(`mongodb+srv://king:king@cluster0.addnvdz.mongodb.net/mamaearthDetails?retryWrites=true&w=majority`,{
    useNewUrlParser: true
}).then((res)=>console.log("db is connected ")).catch((err)=>console.log(err))


app.listen(port,()=>console.log(`server is running at ${port}`))