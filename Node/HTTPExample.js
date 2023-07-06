const {createServer}  = require("http");

const server = createServer((req,res)=>{
    if(req.method ==="GET" && req.url ==="/"){
        console.log(req);
        res.write("<h1>Welcome</h1>");
        return res.end();
    }
    else if(req.method ==="GET" && req.url ==="/products"){
        // console.log(req);
        res.write("<h1>Products</h1>");
        return res.end();
    }
    
});

server.listen(3001,()=>{
    console.log("listening on port 3000");
});
