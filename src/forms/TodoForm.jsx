import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
// import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";

const schema =yup
.object()
.shape({
    title:yup.string().required(),
    duration:yup.number().integer().positive().required()
})
.required();

const defaults = {
    title:"",
    duration:""
}

export default function TodoForm({todo,submitHandler}){
    const{
        handleSubmit,
        formState:{errors,isValid,isDirty,isSubmitting},
        reset,
        control,
        formState,} = useForm({
            resolver:yupResolver(schema),
            mode:"onChange",
            defaultValues: todo || defaults,
        })
        useEffect(()=>{
            console.log(formState)
        })
        useEffect(()=>{
            if(todo){
                reset(todo)
            }
        },[todo,reset])
        const formRowStyle = {
            marginBlockEnd:'1em'
        }
        let submitFn = (vals) => {
            reset();
            todo ? submitHandler(todo.id,vals) : submitHandler(vals);
        }
        return(
            <form onSubmit={handleSubmit(submitFn)}>
                <div style={formRowStyle}>
                    <Controller
                    control = {control}
                    name = "title"
                    defaultValue={""}
                    render = {({field}) => (
                        <TextField
                        type="name"
                        {...field}
                        label="title"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        />

                    )}
                    />
                </div>
                <div style={formRowStyle}>
        <Controller
          control={control}
          name="duration"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="number"
              fullWidth
              error={!!errors.duration}
              {...field}
              label="duration"
              pattern={/[0-9]{1,4}/}
              helperText={errors.duration?.message}
            />
          )}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          sx={{ mr: 2 }}
          disabled={!isDirty}
        >
          Reset
        </Button>
        <Button
          type="submit"
          primary="true"
          variant="contained"
          disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
        >
          Submit
        </Button>
      </div>

            </form>
        );
    
}