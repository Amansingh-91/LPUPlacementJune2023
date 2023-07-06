// Http


const {createServer}  = require("http");
const {readFileSync} = require("fs");
const server = createServer((req,res)=>{
    if(req.method ==="GET" && req.url ==="/dynamic"){
        const data = readFileSync("./DynamicWeb/index.html",{encoding:"utf-8"});
        // console.log(data);
        res.write(data);
        return res.end();
    }
    else if(req.method ==="GET" && req.url ==="/index.css"){
        const data = readFileSync("./DynamicWeb/index.css",{encoding:"utf-8"});
        // console.log(data);
        res.write(data);
        return res.end();
    }
    else if(req.method ==="GET" && req.url ==="/index.js"){
        const data = readFileSync("./DynamicWeb/index.js",{encoding:"utf-8"});
        // console.log(data);
        res.write(data);
        return res.end();
    }

    else if(req.method ==="GET" && req.url ==="/products"){
        // console.log(req);
        res.write("<h1>Products</h1>");
        return res.end();
    }
    else{
        res.writeHead(404);
    }
    res.end();
    
});

server.listen(3000,()=>{
    console.log("listening on port 3000");
});


