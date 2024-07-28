export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
    //     <div><h1>Go to gym</h1>
    // <h2> Go to gym from 6-8  </h2>
    // <button>Mark as completed</button>
    //     </div>
    
    
}