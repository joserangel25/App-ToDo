import React, { useContext, useState } from 'react'
import { taskContext } from '../context/TaskContext';
import './FormTodo.css'

export const FormTodo = () => {
  const { showModal, setShowModal, AddTodo } = useContext(taskContext);
  const [textInput, setTextInput] = useState('');

  const onSubmitTodo = (e) => {
    e.preventDefault();
    console.log(textInput)
    if(textInput.length === 0){
      return alert('Debe escribir una descripcion');
    }
    AddTodo(textInput)
    setTextInput('');
    setShowModal(!showModal)
  }
  return (
    <form onSubmit={onSubmitTodo}>
      <label htmlFor='tarea'>Escribe tu nuevo ToDo</label>
      <textarea 
        id='tarea' 
        placeholder='Escribe la tarea'
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        required
        />
      <div className='TodoForm-buttonContainer'>
        <button type='button' onClick={() => setShowModal(false)} className='TodoForm-button TodoForm-button-cancel'>Cancelar</button>
        <button type='submit' className='TodoForm-button TodoForm-button-add'>Agregar</button>
      </div>
    </form>
  )
}
