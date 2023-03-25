import React from 'react';
import {Link} from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="container">
            <ul className='header__lists'>
                <li className='li'><Link to='/card'>изменить продукты</Link></li>
                <li className='li'><Link to='/addproduct'>добавить продукт</Link></li>
            </ul>
            </div>
        </header>
    );
};

export default Header;