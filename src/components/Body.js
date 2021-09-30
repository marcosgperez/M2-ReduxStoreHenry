import React from "react";
import '../styles/Body.css';

import { useSelector } from 'react-redux';

export default function Body () {

    const counter = useSelector((state) => state.counter)

    return (
        <div className='cuerpo'>
            <h1>
                {counter}
            </h1>
        </div>
    );
};
