import React, { useState } from 'react'
import '../style/TodoContainer.css'
import TodoItem from './TodoItem';

const TodoContainer  = (props) => {

    
    return (
        <section>
            <ul className='todo-container'>                    
                {props.children}
            </ul>
        </section>
    );
}


export default TodoContainer;


