import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'


const TaskList = () => {
    const {todos}=useSelector (state=>state.taskReducer);
  return (
    <div>
        {todos.map (todo=><Task todo={todo} key={todo.id}/>)}
        
    </div>
  )
}

export default TaskList