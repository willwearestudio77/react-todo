import React, { createContext, useState, useCallback, useEffect } from "react";
import { URLKEY } from "../apis/todos";
import { nanoid } from "nanoid";


export const TodosContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo:()=>{},
  fetchTodo:()=>{}
});





export const TodosProvider = ({ children }) => {
  const [todos,setTodos] = useState([])



 const addTodo = useCallback(({title,duration,typeOfTodo}) =>{
  setTodos([...todos,{nanoid,title,duration,typeOfTodo}])
 })

  

  const deleteTodo = useCallback((nanoid) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo._id !== nanoid));
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodosContext.Provider value={{ addTodo,deleteTodo, todos }}>
      {children}
    </TodosContext.Provider>
  );
};
