import React, { useState, useContext, createContext } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const TodoContext = createContext(null);

function TodoProvider ({children}) {
    console.log('inicio del TodoProvider')
    const {
    item: todos,
    setValue: saveTodos,
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);

    // console.log({todos} + "todoContext")
    const [showModal, setShowModal] = useState(false);
    const todosCompletados = todos.filter(todo => todo.estado === true).length;
    const todosTotal = todos.length;  

    const completeTodo = (tarea) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos[todoIndex].estado = true;
    saveTodos(newTodos);
    }

    //Editando el estado de la lista por si hubo un error
    const editTodo = (tarea) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos[todoIndex].estado = false;
    saveTodos(newTodos);
    }

    //Eliminar un elemento cuando se completa la tarea
    const deleteTodo = (tarea) => {
    console.log("ejecutando deleteTodo")
    const todoIndex= todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
    }

    //Filtrando a través del input search
    const [searchValue, setSearchValue] = useState("");

    let filtradoTodos = [];

    if(!searchValue >= 1){
    filtradoTodos = todos;
    } else {
    filtradoTodos = todos.filter(todo => {
        const todoText = todo.tarea.toLowerCase();
        const searchText= searchValue.toLowerCase();      
        return todoText.includes(searchText);
    });
    } 

    const variables = {
        error,
        loading,
        todos,
        saveTodos,
        filtradoTodos,
        todosCompletados,
        todosTotal,
        completeTodo,
        editTodo,
        deleteTodo,
        setSearchValue,
    }
    // console.log(variables, 'desde TodoContext')

    return (
        <TodoContext.Provider value={variables}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };