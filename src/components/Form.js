import React, { useState } from 'react';
import '../styles/Form.css';

import { useDispatch } from 'react-redux';

import { setForm } from '../actions/index'

export default function Form (props) {
    const dispatch = useDispatch();

    // Estado interno
    const [state, setState] = useState ({
        nombre: '',
        colorFav: '',
        cancionFav: '',
    });

    function handleChange (e) {
        setState ({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit (e) {
        e.preventDefault();
        if (state.nombre === '' || state.nombre === undefined) {
            return alert('Falta completar nombre')
        };
        if (state.colorFav === '' || state.colorFav === undefined) {
            return alert('Falta completar color favorito')
        };
        if (state.cancionFav === '' || state.cancionFav === undefined) {
            return alert('Falta completar cancion favorita')
        };
        dispatch(setForm(state));
        setState({
            nombre: '',
            colorFav: '',
            cancionFav: '',
        });
        alert('Creado con exito')
    };

    return (
        <div className='containForm'>
            <form className='container'>

                <div className='inp'>
                    <label>Nombre: </label>
                    <input required 
                    className='placeHolder'
                    type='text'
                    value={state.nombre}
                    onChange={e=>handleChange(e)}
                    name='nombre' />
                </div>


                <div className='inp'>
                    <label>Color favorito: </label>
                    <input required 
                    className='placeHolder'
                    type='text'
                    value={state.colorFav}
                    onChange={e=>handleChange(e)}
                    name='colorFav' />
                </div>

                <div className='inp'>
                    <label>Cancion favorita: </label>
                    <input required 
                    className='placeHolder'
                    type='text'
                    value={state.cancionFav}
                    onChange={e=>handleChange(e)}
                    name='cancionFav' />
                </div>
            </form>
            <div className='button'>
                <input type='submit' onClick={e=>handleSubmit(e)}/>
            </div>
        </div>
    );
};