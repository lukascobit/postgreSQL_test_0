const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')


//middleware
app.use(cors());
app.use(express.json())

///Routes

//create a todo
app.post("/todos", async(req,res)=>{
    try {
        const {description} = req.body;
        console.log({description});
    } catch (error) {
        console.log(error);
    }
});

//get all todos

//get a todo

//update todo

//delete todo

app.listen(3000, () =>{
    console.log("server started on port 3000");
})