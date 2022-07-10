import React, {useContext} from 'react'
import { taskContext } from './context/TaskContext';
import TodoCabecera from './TodoCabecera';
import TodoContainer from './TodoContainer';
import TodoItem from './TodoItem';

export const Ejemplo = () => {
  // const value = useContext(TodoContext);
  const value = useContext(taskContext); 

  return (
    <>
      <TodoCabecera 
        usserName="Jose" 
        todosTotal={value.todosTotal} 
        todosCompletados={value.todosCompletados}
      />
      <TodoContainer>
        {/* {value.error && <p>Desesperate, hubo un error...</p>}
        {value.loading && <p>Estamos cargando, no desesperes...</p>}
        {(!value.loading && !value.filtradoTodos.length) && <p>Crea tu primer TODO</p>} */}
        {/* {value.filtradoTodos.map(todo => (
        <TodoItem 
        key={todo.id} 
        tarea={todo.tarea} 
        fecha={todo.fecha} 
        todoEstado={todo.estado}
        completeTodo={()=> completeTodo(todo.tarea)}
        deleteTodo={()=> deleteTodo(todo.tarea)}
        editTodo={()=> editTodo(todo.tarea)}
        />))} */}
        {(value.item.length === 0)? <h3>Crea tu primer todo</h3>
          :
          value.item.map(todo => <TodoItem 
            key={todo.id} 
            todo={todo}
            tarea={todo.tarea} 
            fecha={todo.fecha} 
            todoEstado={todo.estado}
          />)
        }
      </TodoContainer>
    </>
  )
}
