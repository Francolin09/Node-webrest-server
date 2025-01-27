import express, { Router } from 'express'; 
import path from 'path';


interface Options {
    port:number;
    public_path?:string;
   
    routes: Router;
}

export class Server {
    

    
    private app = express();
    
    private readonly port: number;
    private readonly publicpath: string;
    
    private readonly routes: Router;

    
    constructor(options:Options){
        
        const {port, public_path='public',routes} = options;
        this.port = port;
        this.publicpath = public_path;
        
        this.routes = routes;
    }
    


    async start(){

        
        this.app.use(express.json()); 

        
        this.app.use(express.urlencoded({extended:true}));                             
        
        this.app.use(express.static(this.publicpath)); 

        
     
        
        this.app.use(this.routes);

        
        

       
        this.app.get('*', (req,res) => {
            const indexPath = path.join(__dirname + '../../../public/index.html')
            res.sendFile(indexPath); 
           
        })

        
       
        this.app.listen(this.port, () => { 
            console.log(`Servidor corriendo en puerto ${3000}`)
        })
        
    } 
    
       
}