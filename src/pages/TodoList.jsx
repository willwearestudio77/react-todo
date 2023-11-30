import React from 'react'
import TodosList from '../components/TodosList'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
function TodoList() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TodosList />
      </QueryClientProvider>
    </>
  )
}

export default TodoList