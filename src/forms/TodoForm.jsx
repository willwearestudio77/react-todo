import React, { useEffect,useState ,useContext} from "react";
import { TodosContext } from "../contexts/TodoContext";
import { useForm, Controller } from "react-hook-form";
// import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";

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
  const [title,setTitle] = useState('')
  const [duration,setDuration] = useState('')
  const {addTodo,todos} = useContext(TodosContext)
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
  function titleChangeHandler(event){
    setTitle(event.target.value)
  }
  function durationChangeHandler(event){
    setDuration(event.target.value)
  }
  function mySubmitHandler(event){
    event.preventDefault()
    addTodo({title,duration})
    console.log(todos)
  }
  return (
    <form onSubmit={mySubmitHandler} >
      {/* <form onSubmit={handleSubmit(mySubmitHandler)}> */}
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
          label="title"
          fullWidth
          // error={!!errors.name}
          // helperText={errors.name?.message}
        />
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