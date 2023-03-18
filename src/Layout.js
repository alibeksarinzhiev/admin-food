import React from 'react';
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <ul>
                    <li><Link to='/card'>изменить продукты</Link></li>
                    <li>добавить продукт</li>
                </ul>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;