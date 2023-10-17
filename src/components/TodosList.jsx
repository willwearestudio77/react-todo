import React, { useContext,useEffect } from 'react'
import { IconButton, ListItem,List,ListItemText } from '@mui/material'


import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check';


function TodosList() {
    

    
    return (
        <List>
            
                <ListItem >
                <ListItemText
                    primary='list item'
                    
                />
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon/>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                    <CheckIcon/>
                    </IconButton>

                
            </ListItem>

          
            
        </List>
    )
}

export default TodosList