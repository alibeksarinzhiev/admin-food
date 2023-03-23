import React from 'react';

import { useGetProductQuery} from "../redux/product";

import { Link, useParams } from 'react-router-dom';



const Card = () => {



    const {data=[]} = useGetProductQuery()
    
    
    return (
        data.map((el)=>(
            <div className='card'>
                <Link to={`/singleCard/${el.id}`}>
                    <img src={el.image} alt=""/>
                </Link>
                
                <h2>{el.price}</h2>
                <h2>{el.title}</h2>

            </div>
        ))

    );
};

export default Card;