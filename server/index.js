const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
// const db = require("./config/db")
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });
const mongoConfig = "mongodb://localhost:27017/usersdb"
mongoose.connect(mongoConfig, { useNewUrlParser: true },function(error){
    if(error) throw error
      console.log(`connect mongodb success`);
  });
  

app.use(cors())
app.use(express.json())
// app.use("/cource" ,require("./routes/cource.routes") )
app.use("/inquiry" ,require("./routes/inquiry") )
app.use("/fees"  ,require("./routes/fees"))
app.use("/batch" , require("./routes/batch"))
app.use("/student", require("./routes/student"))
app.use("/user", require("./routes/user"))
app.listen(3000 , ( err )=>{
    if(err)
    {
        console.log("problem in running server",err);
    }else{
        console.log("server is running on port " , 3000);
    }
})