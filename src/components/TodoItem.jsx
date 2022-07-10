import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoProvider } from '../TodoContext';
import '../style/TodoItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarDays, faCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { taskContext } from './context/TaskContext';


const TodoItem = ({ todo } ) => {

    const { tarea, fecha, estado } = todo;
    const {editTodo, completeTodo, deleteTodo} = useContext(taskContext);

    return (
        <li className='todo-item'>
            <div>
                <h4 id='tarea' className={`${estado && 'subrayar'}`} value={estado}>{tarea}</h4>
                <p className='fecha'>
                    <FontAwesomeIcon icon={faCalendarDays} style={{color: "#1B676B", marginRight:"10px"}}/>
                    {fecha}
                </p>
            </div>
            <div className='icon-container btnOption'>
                {
                    !estado ?
                     (<span className='icon-check' onClick={() => completeTodo(tarea)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>)
                    : (<span className='icon-edit btnOption' ide='btn2' onClick={() => editTodo(tarea)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </span>)   
                
                }
                <span className='icon-deleted btnOption' ide='btn3' onClick={()=> deleteTodo(tarea)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </span>  
            </div>
            {/* </div> */}
        </li>
        
    )};



export default TodoItem;

