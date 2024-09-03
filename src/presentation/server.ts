import express from 'express'; 
import path from 'path';


interface Options {
    port:number;
    public_path?:string;
}

export class Server {
    

    
    private app = express();
    
    private readonly port: number;
    private readonly publicpath: string;

    
    constructor(options:Options){
        const {port, public_path='public'} = options;
        this.port = port;
        this.publicpath = public_path;
    }
    


    async start(){
        
        this.app.use(express.static(this.publicpath)); 

       
        this.app.get('*', (req,res) => {
            const indexPath = path.join(__dirname + '../../../public/index.html')
            res.sendFile(indexPath); 
           
        })
       
        this.app.listen(this.port, () => { 
            console.log(`Servidor corriendo en puerto ${3000}`)
        })
        
    } 
    
       
}