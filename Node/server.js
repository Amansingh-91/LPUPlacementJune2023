
const express = require("express");


const homePath = require("./backend/routes/homeRoutes");
const productPath = require("./backend/routes/productRoutes");
const app = express();
app.use(express.json());
app.use("/user",homePath);
app.use("/product",productPath);


// .get()
// .put()
// .post()
// .delete()
// .use() used to apply middleware to the request url
// .listen()





app.listen(3000,()=>{
    console.log("listening to post 3000");
})