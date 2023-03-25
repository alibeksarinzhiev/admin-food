import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {useGetProductQuery} from "../redux/product";
import './card.css'

const Card = () => {

    const {data=[]} = useGetProductQuery()
    
    
    return (
        <div className='cards'>
            {
        data.map((el)=>(
           
                <div className='card'>
                <Link to={`/singleCard/${el.id}`}>
                    <img src={el.image} alt=""/>
                </Link>
                
                <h2>{el.title}</h2>
                <h2>{el.price}</h2>
            
                </div>

           
        ))
}
</div>
    );
};

export default Card;