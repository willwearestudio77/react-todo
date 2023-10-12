import React from 'react'
import { IconButton, ListItem,List,ListItemText } from '@mui/material'


import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check';


function TodosList({
    todos =['build an app','play a game of mtg','watch the football'],
    deleteHandler = () => console.log('no delete handler added to todo list'),
    checkHandler = () => console.log('no check handler added to todo list')

}) {
    return (
        <List>
            {todos.map((name,key)=>(
                <ListItem key={key}>
                <ListItemText
                    primary={name}
                />
                <IconButton edge="end" aria-label="delete" onClick={()=>deleteHandler(key)}>
                    <DeleteIcon/>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={()=>checkHandler(key)}>
                    <CheckIcon/>
                    </IconButton>

                
            </ListItem>

            ))}
            
        </List>
    )
}

export default TodosList