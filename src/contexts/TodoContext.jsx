import React, { createContext, useState, useCallback, useEffect } from "react";
import { URLKEY } from "../apis/todos";
import { nanoid } from "nanoid";
import { useQuery } from "@tanstack/react-query";
const ENDPOINT = 'https://api-eu-west-2.hygraph.com/v2/clox69uve06ya01uo50mgh04i/master'

export const TodosContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo:()=>{}
});





export const TodosProvider = ({ children }) => {
  



  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = useCallback(({ title, duration }) => {
    const newTodo = { title, duration ,_id:nanoid()};
    setTodos([...todos, newTodo]);
  }, [todos, setTodos]);

  const deleteTodo = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
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
