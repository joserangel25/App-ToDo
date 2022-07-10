import React, { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const taskContext = createContext(null);

const getDate = () => {
  const date = new Date();
  const [ dia, mes, anio ] = [`${date.getDate()}`, `${date.getMonth()}`, `${date.getFullYear()}`];
  // console.log(dia, mes, anio);
  return `${dia}/${parseInt(mes) + 1}/${anio}`; 
}

export const TaskContextProvider = ({children}) => {

  // const [name, setName] = useState(false);

  // useEffect(()=> {
  //   console.log(name)
  //   if(name === undefined || false){
  //     const prom = prompt('Escribe tu nombre');
  //     if(prom === null){
  //       alert('Nombre invalido')
  //     }else {
  //       window.localStorage.setItem('USSER_NAME', prom)
  //       setName(prom)
  //     }
  //   }
  // },[])

  const value = useLocalStorage('TODOS_V1', []);
  const { item: todos, setValue: saveTodos, loading, error } = value;
  const [showModal, setShowModal] = useState(false);


  //numero de todos completados
  const todosCompletados = todos.filter(todo => todo.estado === true).length;
  //numero de todos en la lista
  const todosTotal = todos.length;
  //Marcar una tarea como completada
  const completeTodo = (tarea) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos[todoIndex].estado = true;
    saveTodos(newTodos);
  }
  //Agregar una nueva tarea
  const AddTodo = (tarea) => {
    const newTodos = [...todos];
    newTodos.push({
      tarea,
      estado: false,
      fecha: getDate(),
      id: Date.now()
    });
    saveTodos(newTodos);
  }
  //Eliminar una tarea de la lista
  const deleteTodo = (tarea) => {
    console.log("ejecutando deleteTodo")
    const todoIndex= todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }
  //Editar el estado de una tarea de la lista
  const editTodo = (tarea) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos[todoIndex].estado = false;
    saveTodos(newTodos);  
  }

  const getName = () => {
    const name = window.localStorage.getItem('USSER_NAME')
    if(name === null){
      return undefined
    }else {
      return name
    }
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

  const data = {
    todos,
    loading,
    error,
    todosCompletados,
    todosTotal,
    completeTodo,
    deleteTodo,
    showModal,
    setShowModal,
    AddTodo,
    editTodo,
    filtradoTodos,
    searchValue,
    setSearchValue
  }
  return (
    <taskContext.Provider value={data}>
      {children}
    </taskContext.Provider>
  )
}
