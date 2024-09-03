
import http from 'http';
import fs from 'fs';


const server = http.createServer((req,res) => {
    console.log(req.url)
    
    if(req.url ==='/'){
        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(200,{'Content-Type': 'text/html' });
        res.end(htmlFile);

        return;
    }

    
    

    // else{
    //     res.writeHead(404,{'Content-Type': 'text/html' })
    //     res.end('<h1>No sé que estás llamando, apreta bien las teclas mejor será</h1>')
    // }

    if(req.url?.endsWith('.js')){
        res.writeHead(200,{'Content-Type': 'application/javascript'})
    } 
    else if(req.url?.endsWith('.css')){
        res.writeHead(200,{'Content-Type':'text/css'});
    }

    const responseContent = fs.readFileSync(`./public${req.url}`,'utf-8');
    res.end(responseContent)
});

server.listen(8081, () => {
    console.log("Servidor corriendo en el puerto 8081")
})

