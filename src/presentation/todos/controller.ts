import { error } from "console";
import { Request, Response } from "express";

const todos = [
    {id:1,text:'Comprar pancito',createdAt: new Date()},
    {id:2,text:'Comprar paltas',createdAt: null},
    {id:3,text:'Comprar tomates',createdAt: new Date()},
]

export class TodosController {
   
    constructor (){}


    public getTodos = (req:Request, res: Response) => {
            res.json(todos)
            
    }
    

    
    public getTodoById = (req:Request, res:Response) => {
        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`Mandaste un id que no es número`})
        const todo = todos.find(todo => todo.id === id);

        
        (todo)
         ? res.json(todo)
         : res.status(404).json({error: `ToDo con id ${id} no encontrado`})
        
    }

    public createTodo =  (req: Request, res: Response) => {
       
        const {text} = req.body; 
        if(!text) return res.status(400).json({error:`Propiedad text es requerida!!!!`})
           
        console.log(text);
        const newTodo = { 
            id: todos.length + 1,
            text:text,
            createdAt:null
        }

        todos.push(newTodo) 

        res.json(newTodo) 
    }
    
    public updateTodo = (req:Request, res:Response) => {
        
        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`Mandaste un id que no es número`}) 
        
        const todo = todos.find(todo => todo.id === id); 
                                                      
        if(!todo) return res.status(400).json({error:`Tarea no encontrada`}) 

        const {text,createdAt} = req.body; 
       

        
        todo.text=text || todo.text; 
        
        (createdAt ==='null') 
        ? todo.createdAt=null 
        : todo.createdAt = new Date(createdAt || todo.createdAt);
        



        res.json(todo)

    }

    
    public deleteTodo = (req:Request,res:Response) => {
        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`Mandaste un id que no es número`}) 

        const todo = todos.find(todo => todo.id===id); 
        if(!todo) return res.status(400).json({error:`tarea con id ${id} no existe`}) 
        
        todos.splice(todos.indexOf(todo),1); 
        
        res.json(todo) 
       

    }
    
}