import React from "react";
import '../styles/Body.css';

import { useSelector, useDispatch } from 'react-redux';

import { deleteForm } from '../actions/index'

export default function Personas () {
    const dispatch = useDispatch();

    const personas = useSelector((state) => state.stateform);

    function handleClick (e) {
        e.preventDefault()
        dispatch(deleteForm(e.target.value))
    }

    return (
        <div className='cuerpo'>
            {
                personas.map(e => {
                    return (
                        <div className='personas'>
                            <h1>Nombre: {e.nombre}</h1>
                            <h5>Color favorito: {e.colorFav}</h5>
                            <h5>Cancion favorita: {e.cancionFav}</h5>
                            <button className='btn' value={e.nombre} onClick={e=>handleClick(e)}>X</button>
                        </div>
                    )
                })
            }
        </div>
    );
};
