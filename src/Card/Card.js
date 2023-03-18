import React from 'react';
import {useGetProductQuery} from "../redux/product";

const Card = () => {

    const {data=[]} = useGetProductQuery()
    console.log(data)
    return (
        data.map((el)=>(
            <div className='card'>

                <img src={el.image} alt=""/>
                <h2>{el.price}</h2>
                <h2>{el.title}</h2>
            </div>
        ))

    );
};

export default Card;