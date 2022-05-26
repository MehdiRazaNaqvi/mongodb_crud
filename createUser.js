// const dbConnect = require("./1.js");
// const express = require("express");

const User = require("./schema")


const insertdata = async () => {

    // let data = await dbConnect();
  
    let result = 
        {
            name: "shuja"
        }


        let result1 = new User(result)
        await result1.save( async (  err  , dta) => {
                console.log("success fully aded")
                res.end("new user added")

            })



    
    

}


insertdata()

module.exports = insertdata();
