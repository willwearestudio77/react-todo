import React,{useContext} from 'react'
import TodoForm from '../forms/TodoForm'


function Add() {
  
  return (
    <div>Add
      <TodoForm submitHandler={addTodo}/>
    </div>
    
  )
}

export default Add