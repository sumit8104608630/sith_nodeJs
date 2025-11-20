const pg=require("pg")
const {Client} = pg
const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"vaishnavi_sith",
    password:"root",
    port:5433
});

client.connect((err)=>{
    if(err)
    {
        console.log(err);
        res.status(400).send(`error while connecting ${err}`);
    }
    else{
        console.log("connected successfully")
    }
})

module.exports = client;