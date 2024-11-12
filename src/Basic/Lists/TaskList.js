function  TaskList(){
    const tasks=[
        {id:1,title:"Complete assignment", completed:true},
        {id:2,title:"Read documentation", completed:false},
        {id:3,title:"Work on side project", completed:false},
        {id:4,title:"Practice coding challenges", completed:true},
    ];
    return(
        <div>
            <h2> Task lists</h2>
            <ul>
                {tasks.map((task)=>(
                    <li key={task.id}>
                        <span style={{textDecoration:task.completed?"line-through":"none"}}>
                            {task.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export  default TaskList