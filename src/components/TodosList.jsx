import React, { useContext,useEffect } from 'react'
import { IconButton, ListItem,List,ListItemText } from '@mui/material'
import { CircularProgress } from '@mui/material'
import { TodosContext } from '../contexts/TodoContext';
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check';


function TodosList() {
    const { deleteTodo,todos } = useContext(TodosContext)
    
    
    

    return (
        
        <List>
            {todos.map(({ nanoid, title, duration }) => (
                <ListItem key={nanoid} >
                <ListItemText
                    primary={title}
                    secondary={duration}
                    
                />
                <IconButton onClick={()=>deleteTodo(nanoid)} edge="end" aria-label="delete">
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