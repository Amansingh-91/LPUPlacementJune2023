const express = require("express");
const router =  express.Router();
const app = express();

router.get("/:id/:name",(req,res)=>{
    console.log(req.params);

    // res.sendFile();
    res.sendFile("./index.html",{root:__dirname});
    
});
router.post("/login",(req,res)=>{
    
//    console.log("in login",req.query);
    console.log(req.body);
    
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