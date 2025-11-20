// console.log("Hello");
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const pg=require("pg")
const fs=require("fs")
const client=require("./config/pg_config")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/query/', (req, res) => {
    res.send(req.query)
})

app.get('/param/:id/:name/', (req, res) => {
    res.send(req.params.id)
})

app.post('/body/', (req, res) => {
    res.send(req.body)
})




app.post("/users/create_user/",(req, res)=>{
       const file=require(__dirname+"/src/create_user.js");
       file.main(req, res,client);
       console.log(file)
    })




app.get("/user/user_data",async(_, res)=>{
    const data=await client.query("select * from users")
    res.status(200).send(data)
})


app.listen(9998, () => {
    console.log(`Example app listening 9998`)
})

