import React from 'react';
import {useGetProductQuery} from "../redux/product";
import './home.css'

const Home = () => {

    const {data=[]} = useGetProductQuery()
    return (
        <section>
            <div className="container">
                <h1>это ваша админ панель</h1>
                <h2 className='home__milk__title'>Категория milk</h2>
                <div className='home__milk'>

                    {data.filter((el)=>(
                        el.category==='Milk'
                    )).map((el)=>(
                        <div className='home__card'>
                            <img src={el.image} alt=""/>
                            <p>{el.title}</p>
                            <h3>{el.price} сом</h3>
                            <h3>{el.category}</h3>
                        </div>
                    ))
                    }

                </div>
                <h2>Категория хлеб</h2>
                {data.filter((el)=>(
                    el.category==='Bread'
                )).map((el)=>(
                    <div className='home__card'>
                        <img src={el.image} alt=""/>
                        <p>{el.title}</p>
                        <h3>{el.price} сом</h3>
                        <h3>{el.category}</h3>
                    </div>
                ))
                }
            </div>
        </section>
    );
};

export default Home;