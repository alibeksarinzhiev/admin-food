import React from 'react';

import { useDeleteProductMutation, useGetProductQuery} from "../redux/product";

import { Link, useParams } from 'react-router-dom';



const Card = () => {



    const {data=[]} = useGetProductQuery()
    const [deleted] = useDeleteProductMutation()
    const deleteProduct = (id) =>{deleted(id)}

    return (
        data.map((el)=>(
            <div className='card'>
                <Link to={`/singleCard/${el.id}`}>
                    <img src={el.image} alt=""/>
                </Link>
                <p>{el.id}</p>
                <h2>{el.price}</h2>
                <h2>{el.title}</h2>
                <button onClick={() => deleteProduct(el.id)}>Delete</button>
            </div>
        ))

    );
};

export default Card;