import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import PageLayout from "./components/PageLayout";
import TodoList from "./pages/TodoList";
import Add from "./pages/Add";
import Update from "./pages/Update";
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<TodoList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
