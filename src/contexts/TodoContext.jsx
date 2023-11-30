import React, { createContext, useState, useCallback, useEffect } from "react";
import { URLKEY } from "../apis/todos";



export const TodosContext = createContext({
  todos: [],
  completedTodos:[],
  addTodo: () => {},
  deleteTodo:()=>{},
  fetchTodo:()=>{},
  completeTodo:()=>{}
});





export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [completedTodos, setCompletedTodos] = useState(() => {
    const storedCompletedTodos = localStorage.getItem("completedTodos");
    return storedCompletedTodos ? JSON.parse(storedCompletedTodos) : [];
  });
  



 const addTodo = useCallback(({id,title,duration,typeOfTodo}) =>{
  let finished = false;
  setTodos([...todos,{id,title,duration,typeOfTodo,finished}])
 })
 
 const finishTodo = useCallback(({id})=>{
  finished = true;
  setTodos([...todos,{nanoid,title,duration,typeOfTodo,finished}])
 })
  

  const deleteTodo = useCallback((id) => {
    console.log(id)
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, [setTodos]);

  const completeTodo = useCallback((id, title, duration, typeOfTodo) => {
    setCompletedTodos((prevCompletedTodos) => [
        ...prevCompletedTodos,
        { id, title, duration, typeOfTodo }
    ]);
    
}, [deleteTodo, setCompletedTodos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodosContext.Provider value={{ addTodo,deleteTodo, todos,completeTodo,completedTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
