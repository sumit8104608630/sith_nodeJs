function main(req,res,client){
    let{first_name, email, role, mobile}=req.body;
    let user_name = first_name.trim()+"@"+mobile.trim();
    let psw = first_name.trim().toLowerCase();
    const insertQuery = `
    INSERT INTO users (user_name, mobile, email, role, password)
    VALUES ($1, $2, $3, $4, $5)
    
  `;

    const values = [user_name, mobile, email, role, psw];

    client.query(insertQuery, values, (err) => {
        if (err) {
            console.log(err);
            res.status(400).send("Error while inserting data");
            return;
        }
        res.status(200).send("Data inserted successfully");
    });
}

module.exports={
    main
}