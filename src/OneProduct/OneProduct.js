import React, { useEffect } from 'react';
import { useChangeProductMutation, useGetOneProductQuery } from "../redux/product";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const OneProduct = () => {
    const [changeProduct] = useChangeProductMutation()

    const { pathname } = useLocation()

    let num = pathname.split('/').at(-1)
    const { data = [] } = useGetOneProductQuery(num)







    const {

        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }

    } = useForm({ mode: 'onBlur' })

    const postProduct = (product) => {
        changeProduct({ ...data, ...product })
        console.log(changeProduct({ ...data, ...product }))
    }


    return (
        <>
            <div className='item'>
                <img src={`/${data.image}`} alt=""/>
                <p>{data.title}</p>
                <p>{data.price}</p>
            </div>

        <div className='oneProduct'>
            <h2>изменение одного продукта</h2>
            <form noValidate onSubmit={handleSubmit(postProduct)}>
                <input {...register('price',{
                    required:{
                        message:'заполните это поле price',
                        value:true
                    }
                })}
                    defaultValue={data.price} type="text" placeholder='изменить цену'/>
                <input {...register('title',{
                    required:{
                        message:'заполните это поле title',
                        value:true
                    }
                })}
                    defaultValue={data.title} type="text" placeholder='изменить название'/>

                <input type="text" {...register('withoutsale',{
                    required:{
                        message:'заполните это поле title',
                        value:true
                    }
                })} placeholder='введите цену без скидки'/>
                <input type="text" {...register('status',{
                    required:{
                        message:'заполните это поле status',
                        value:true
                    }
                })}/>
                <input type="text" {...register('sale',{
                    required:{
                        message:'dffh',
                        value:true
                    }
                })}/>
                <button type='submit'>отправить</button>
            </form>

        </div>

        </>


    );
};

export default OneProduct;