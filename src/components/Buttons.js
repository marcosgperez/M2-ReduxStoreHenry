import React from "react";
import '../styles/Buttons.css';

import { useDispatch } from 'react-redux';
import { setCount, increment, decrement } from "../actions";

export default function Buttons () {

    // Dispatcher
    const dispatch = useDispatch()

    // Funcion generica 
    function handleClick (e) {
        e.preventDefault();
        dispatch(setCount(e.target.name))
    };

    // Funciones especificas para cada caso
    // function handleClickInc (e) {
    //     e.preventDefault();
    //     dispatch(increment())
    // };

    // function handleClickDec (e) {
    //     e.preventDefault();
    //     dispatch(decrement())
    // };

    return (
        <div>
            <button onClick={e=>handleClick(e)} name='increment'>INCREMENT</button>
            {/* <button onClick={e=>handleClickInc(e)} name='increment'>INCREMENT</button> */}
            <button onClick={e=>handleClick(e)} name='decrement'>DECREMENT</button>
            {/* <button onClick={e=>handleClickDec(e)} name='increment'>INCREMENT</button> */}
        </div>
        
    );
};

