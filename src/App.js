import React from 'react';
import {Route,Routes} from "react-router-dom";
import Card from "./Card/Card";
import OneProduct from "./OneProduct/OneProduct";
import Layout from "./Layout";
import Home from "./Home/Home";
import AddOneProduct from "./addOneProduct";

const App = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                <Route path='card' element={<Card/>}/>
                <Route path='card/:id' element={<OneProduct/>}/>
                <Route path='addproduct' element={<AddOneProduct/>}/>
                </Route>
            </Routes>

        </>
    );
};

export default App;