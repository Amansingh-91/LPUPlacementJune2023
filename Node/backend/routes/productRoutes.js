const express = require("express");
const axios = require("axios");
const router = express.Router();
// product routes
router.get("/",async (req,res)=>{
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // console.log(data);
    res.send(JSON.stringify(response.data));
    res.end();
    
});
router.post("/",(req,res)=>{
   console.log("in post");
   res.send({status:true});
    
});
router.put("/",(req,res)=>{
    console.log("in put");
    res.send({status:true});
    
});
router.delete("/",(req,res)=>{
    console.log("in delete");
   res.send({status:true});
    
});

module.exports = router;