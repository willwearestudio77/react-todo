import React, { useEffect, useState, useContext } from "react";
import { TodosContext } from "../contexts/TodoContext";
import { nanoid } from "nanoid";
import { useForm, Controller } from "react-hook-form";
// import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import{InputLabel,Select,MenuItem} from "@mui/material"

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
  })
  .required();

const defaults = {
  title: "",
}

export default function TodoForm({ todo, submitHandler }) {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [typeOfTodo,setTypeOfTodo] = useState('')
  const { addTodo, todos } = useContext(TodosContext)
  const id = nanoid()
  // const {
  //   handleSubmit,
  //   formState: { errors, isValid, isDirty, isSubmitting },
  //   reset,
  //   control,
  //   formState, } = useForm({
  //     resolver: yupResolver(schema),
  //     mode: "onChange",
  //     defaultValues: todo || defaults,
  //   })
  // useEffect(() => {
  //   console.log(formState)
  // })
  // useEffect(() => {
  //   if (todo) {
  //     reset(todo)
  //   }
  // }, [todo, reset])
  const formRowStyle = {
    marginBlockEnd: '1em'
  }
  let submitFn = (vals) => {
    // reset();
    todo ? submitHandler(todo.id, vals) : submitHandler(vals);
  }
  function titleChangeHandler(event) {
    setTitle(event.target.value)
  }
  function durationChangeHandler(event) {
    setDuration(event.target.value)
  }
  function typeChangeHandler(event) {
    setTypeOfTodo(event.target.value)
  }
  function mySubmitHandler(event) {
    event.preventDefault()
    addTodo({ id,title, duration,typeOfTodo })
    console.log(todos)
  }
  return (
    <form onSubmit={mySubmitHandler} >
      <div style={formRowStyle}>
        <TextField
          value={title}
          onChange={titleChangeHandler}
          // {...field}
          label="title"
          fullWidth
        // error={!!errors.name}
        // helperText={errors.name?.message}
        />
         <TextField
          value={duration}
          onChange={durationChangeHandler}
          // {...field}
          label="duration"
          fullWidth
        // error={!!errors.name}
        // helperText={errors.name?.message}
        /> 
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="todo-type"
          id="demo-simple-select"
          value={typeOfTodo}
          label="Type"
          onChange={typeChangeHandler}
        >
          <MenuItem value={'Family'}>Family</MenuItem>
          <MenuItem value={"Excercise"}>Excercise</MenuItem>
          <MenuItem value={"Work"}>Work</MenuItem>
          <MenuItem value={"Play"}>Play</MenuItem>
        </Select>
      </div>
      <div style={formRowStyle}>
      </div>
      <div style={{ marginTop: 20 }}>
        <Button
          type="reset"
          // onClick={() => reset()}
          variant="contained"
          sx={{ mr: 2 }}
        // disabled={!isDirty}
        >
          Reset
        </Button>
        <Button
          type="submit"
          primary="true"
          variant="contained"
        // disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
        >
          Submit
        </Button>
      </div>

    </form>
  );

}