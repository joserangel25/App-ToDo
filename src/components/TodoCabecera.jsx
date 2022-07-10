import React from 'react'

import '../style/TodoCabecera.css'

const TodoCabecera = ({ usserName, todosTotal, todosCompletados }) => {
    return (
        <div className='cabecera'>
            <h2>Hola de nuevo {usserName || 'visitante'}, bienvenido!</h2>
            <p className='subtitulo'>Has completado {todosCompletados} de {todosTotal} TODOs de la lista</p>
        </div>
    );
}

export default TodoCabecera;