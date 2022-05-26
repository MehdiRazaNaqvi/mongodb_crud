


// const path = require("path");
// // console.log(__filename)


// var pathobj = path.parse(__filename)
// console.log(pathobj)








// const os = require("os")


// console.log(os.totalmem())
// console.log(os.freemem())



// creating a server



// const http = require("http")

// const courses = [{ name: "html", id: 1 }, { name: "css", id: 2 }]
// const users = ["mehdi", "raza"]



// var server = http.createServer(function (req, res) {




//     res.write("<h1>Hello World</h1>");
//     res.end()


//     if (req.url === "/api/courses") {



//         res.write(JSON.stringify(courses));
//         res.end();
//     }

//     else if (req.url === "/api/users") {

//         res.write(JSON.stringify(users));
//         res.end();
//     }

//     else {
//         res.write("Responding");
//         res.end()
//     }

// })


// server.listen(3002)




                                                                // rendering html on server






// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function (req, res) {

//     console.log(req.url)

//     fs.readFile("htmlfile.html", function (err, data) {
//         // res.writeHead(200, { "Content-Type": "text/html" });

//         res.write(data);
//         res.end();


//     })
// });

// server.listen(3002)














                                                                    // connect mongo db



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mehdi:mehdimongodb@cluster0.xuahs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const User = require("./schema.js");





client.connect(err => {
  // const collection = client.db("database0").collection("col0");




                                                      // fetch





   client.db("database0").collection("col0").find({name : "fahad"} ).toArray()
  .then((ans) => console.log(ans))
  .catch((err) => console.log(err)) 





                                                       //Add

// const useradd = new User({name : "fahad"})

//  client.db("database0").collection("col0").insertOne(useradd)
//  .then(() => console.log("success"))
//  .catch(( err) => console.log(err))



                                                          // Delete

// client.db("database0").collection("col0").deleteOne({name : "imran"})
// .then(() => console.log("success"))
// .catch((err) => console.log(err))



//   client.close();
});









// const addUser = require("./createUser");


// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://mehdi:mehdimongodb@cluster0.xuahs.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



// async function dbConnect ()
// {
//     let result = await client.connect();
    
//     let db = result.db(database0);
//     return db.collection("col0");
// }

// module.exports = dbConnect;