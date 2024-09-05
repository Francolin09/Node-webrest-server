import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";



(()=> {
 main();
})();

function main(){
    console.log("ola")
    
    
    const server = new Server({
        port:envs.PORT,
        public_path: envs.PATH,
        routes: AppRoutes.routes, 
                                  
    });
    server.start(); 
}



