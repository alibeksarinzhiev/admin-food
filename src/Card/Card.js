import React from 'react';
import { useDeleteProductMutation, useGetProductQuery} from "../redux/product";
import { Link, useParams } from 'react-router-dom';
import './card.css'




const Card = () => {



    const {data=[]} = useGetProductQuery()
    const [deleted] = useDeleteProductMutation()
    const deleteProduct = (id) =>{deleted(id)}

    return (
        <div className="container">
        <div className='cards'>

            {
        data.map((el)=>(
           
                <div className='card'>
                <Link to={`/singleCard/${el.id}`}>
                    <img src={el.image} alt=""/>
                </Link>
                <h2>{el.title}</h2>
                <h2>{el.price}</h2>
            
                <button onClick={() => deleteProduct(el.id)}>Delete</button>
            </div>
        ))

}
</div>
        </div>
    );
};

export default Card;