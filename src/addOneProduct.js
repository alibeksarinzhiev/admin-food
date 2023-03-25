import React from 'react';
import {useForm} from "react-hook-form";
import {useAddProductMutation} from "./redux/product";

const AddOneProduct = () => {

    const[addProduct] = useAddProductMutation()
    
    const{
        register,
        reset,
        handleSubmit,
        formState:{
            errors
        }

    }=useForm({mode:'onBlur'})

    const postProduct = (product)=>{
        addProduct(product);
    }

    return (
        <div>
            <form action="" noValidate onSubmit={handleSubmit(postProduct)}>
                <input placeholder='Цена' type="text" {...register('price',{
                    required:{
                        message:'заполните поле'
                    }
                })}/>
                <input placeholder='фотография' type="text"{...register('image',{
                    required:{
                        message:'заполните поле'
                    }
                })}/>
                <input type="text" placeholder='категория' {...register('category',{
                    required:{
                        message:'заполните поле'
                    }
                })}/>
                <input type="text" placeholder='статус' {...register('status',{
                    required:{
                        message:'заполните поле'
                    }
                })}/>
                <button>создать</button>
            </form>
        </div>
    );
};

export default AddOneProduct;