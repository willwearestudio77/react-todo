import React, { useContext, useEffect } from 'react'
import { IconButton, ListItem, List, ListItemText } from '@mui/material'
import { CircularProgress } from '@mui/material'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { TodosContext } from '../contexts/TodoContext';
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check';
import BadgeIcon from '@mui/icons-material/Badge';
import ToysIcon from '@mui/icons-material/Toys';



function TodosList() {
    const { deleteTodo, todos,completeTodo } = useContext(TodosContext);

    return (
        <List>
            {todos.map(({ id, title, duration, typeOfTodo }) => {
                let type;
                let colorList;

                switch (typeOfTodo) {
                    case 'Family':
                        type = <Diversity3Icon />;
                        break;
                    case 'Excercise':
                        type = <DirectionsRunIcon />;
                        break;
                    case 'Work':
                        type = <BadgeIcon />;
                        break;
                    case 'Play':
                        type = <ToysIcon />;
                        break;
                    default:
                        type = null;
                }
                

                return (
                    <ListItem key={id} className={typeOfTodo}>
                        <ListItemText
                            primary={title}
                            secondary={duration}
                        />
                        <IconButton onClick={() => deleteTodo(id)} edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={() => {completeTodo({id,title, duration, typeOfTodo})
                    deleteTodo(id)}} edge="end" aria-label="delete">
                            <CheckIcon />
                        </IconButton>
                        {type}
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TodosList;