import React, { useContext,useEffect } from 'react'
import { IconButton, ListItem,List,ListItemText } from '@mui/material'
import { TodosContext } from '../contexts/TodoContext';
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check';
import { useQuery } from "@tanstack/react-query";
const ENDPOINT = 'https://api-eu-west-2.hygraph.com/v2/clox69uve06ya01uo50mgh04i/master'


function TodosList() {

    const { isLoading, error, data } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "appllication/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    query: getAllProjects
                })
            })
            if (!res.ok) throw new Error("Failed to fetch")
            return await res.json()
        }
      })
  
 

    
    return (
        
        <List>
            {todos.map(({ _id, title, duration }) => (
                <ListItem key={_id} >
                <ListItemText
                    primary={title}
                    secondary={duration}
                    
                />
                <IconButton onClick={()=>deleteTodo(_id)} edge="end" aria-label="delete">
                    <DeleteIcon/>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                    <CheckIcon/>
                    </IconButton>

                
            </ListItem>
            ))}
          
            
        </List>
    )
}

export default TodosList