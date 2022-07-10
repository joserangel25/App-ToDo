import React, { useState, useContext } from 'react'
import { taskContext } from './components/context/TaskContext';
import Search from './components/Search';
import TodoCabecera from './components/TodoCabecera';
import TodoContainer from './components/TodoContainer';
import TodoItem from './components/TodoItem';
import NuevaTarea from './components/NuevaTarea';
// import { Ejemplo } from './components/Ejemplo';
import { Modal } from './components/modal/Modal';
import { FormTodo } from './components/FormTodo/FormTodo';
import { Loader } from './components/Loader/Loader';

import './App.css'

function App() {

  const value = useContext(taskContext);

  return (
    <div className="App">
      <header className="App-header">
        
      <main>
          
        <>
        <TodoCabecera 
          usserName={undefined}
          todosTotal={value.todosTotal} 
          todosCompletados={value.todosCompletados}
        />

        <TodoContainer>
        
          {/* {value.error && <p>Desesperate, hubo un error...</p>} */}
          {value.loading && <Loader />}
          {(!value.loading && !value.todos.length) && <p>Crea tu primer ToDO</p>}
          {(!value.loading && value.todos.length) && <Search 
                                                        searchValue={value.searchValue} 
                                                        setSearchValue={value.setSearchValue}
                                                        />}
          {/* {(!value.filtradoTodos.length) && <p>No hay coincidencias</p>} */}

          {value.filtradoTodos.map(todo => (
                    <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    />))}

          {/* {value.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
          />))} */}
          
        </TodoContainer>
      </>
      
      {
        value.showModal && (
          <Modal>
            <FormTodo />
          </Modal>
        )
      }

      <NuevaTarea setShowModal={value.setShowModal}/>
          
      </main>
      </header>
    </div>
  )
}

export default App


/*
Cuerpo de la lista de los TODOs 
          <TodoContext.Consumer>
            {(value) => {
              console.log(value)
              return (
                <>

                  <TodoCabecera usserName="Jose" todosTotal={value.todosTotal} todosCompletados={value.todosCompletados}/>

                  Componente para realizar los filtros o busquedas
                  <Search searchValue={value.searchValue} setSearchValue={value.setSearchValue}/>
                  <TodoContainer>
                    {value.error && <p>Desesperate, hubo un error...</p>}
                    {value.loading && <p>Estamos cargando, no desesperes...</p>}
                    {(!value.loading && !value.filtradoTodos.length) && <p>Crea tu primer TODO</p>}
                    {value.filtradoTodos.map(todo => (
                    <TodoItem 
                    key={todo.id} 
                    tarea={todo.tarea} 
                    fecha={todo.fecha} 
                    todoEstado={todo.estado}
                    completeTodo={()=> completeTodo(todo.tarea)}
                    deleteTodo={()=> deleteTodo(todo.tarea)}
                    editTodo={()=> editTodo(todo.tarea)}
                    />))}
                  </TodoContainer>
                  
                </>
            )}}
          </TodoContext.Consumer>

          Boton para agregar nueva tarea y desplegar modal
          <NuevaTarea />
*/