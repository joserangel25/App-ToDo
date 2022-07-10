import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { TodoProvider } from './TodoContext'
import { TaskContextProvider } from './components/context/TaskContext'
import { Ejemplo } from './components/Ejemplo'

ReactDOM.render(
  <TaskContextProvider>

    {/* <TodoProvider> */}
      <App />
      {/* <Ejemplo /> */}
    {/* // </TodoProvider>, */}
  </TaskContextProvider>,
  document.getElementById('root')
)
