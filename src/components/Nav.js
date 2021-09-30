import React from "react";
import '../styles/Nav.css';

// Link to
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <header>
            <div className='navigation'>
                <nav>
                    <Link to='/'>
                        <li>
                            HOME
                        </li>
                    </Link>
                    <Link to='/counter'>
                        <li>
                            COUNT
                        </li>
                    </Link>
                    <Link to='/form'>
                        <li>
                            FORM
                        </li>
                    </Link>
                </nav>
                <img className='logo' src='https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png' alt='Hery logo'/>
            </div>
        </header>
    )
};