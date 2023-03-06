import {ADD_TASK, DELETE_TASK, EDIT_TASK,
UPDEAT,TOGGEL,FILTER} from "../actions/types";
const initialeState ={
    todos:[{id:1,description:"task1",isDone:false},{id:2,description:"task2",isDone:false}],
    current:null,
    filtredTodos:[]
}
const taskReducer=(state=initialeState, {type,payload})=> {
    switch (type) {
        case ADD_TASK : 
            return {...state,todos:[...state.todos,payload]};
        case DELETE_TASK :
            return {...state,todos:[...state.todos.filter((todo)=>todo.id!==payload)]};
        case EDIT_TASK :
            return {...state,current:payload,};
        case UPDEAT :
            return {...state,todos:state.todos.map((todo)=>todo.id===payload.id?{...todo,description:payload.description}:todo)};
        case TOGGEL :
            return {...state,todos:state.todos.map((todo)=>todo.id===payload?{...todo,isDone:!todo.isDone}:todo)};
        case FILTER:
            return {...state,FilteredTodos: payload === "completed"
                      ? state.todos.filter((todo) => todo.isDone)
                      : payload === "uncompleted"
                      ? state.todos.filter((todo) => !todo.isDone)
                      : [],
                };
        default: 
                return state
        }
        
        
    
        
    }


export default taskReducer;