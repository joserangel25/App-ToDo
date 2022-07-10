import React from 'react'
import '../style/NuevaTarea.css'


const NuevaTarea = ({setShowModal}) => {
    const showModal = () => {
        setShowModal(true)
    }
    return (        
            <div className='add-tarea' onClick={showModal}>
                <p>+</p>
            </div>
        
    );
}

export default NuevaTarea;