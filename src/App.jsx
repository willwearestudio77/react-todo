import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,{useState} from 'react'

import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from "@mui/material/styles";
import PageLayout from "./components/PageLayout";
import TodoList from "./pages/TodoList";
import Add from "./pages/Add";
import Update from "./pages/Update";
import NotFound from './pages/NotFound'
import { CssBaseline } from "@mui/material";
import theme from './themes/theme'

function App() {

  return (
    <>
      <Router>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<TodoList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </ThemeProvider>
    </Router>
    </>
  )
}

export default App
