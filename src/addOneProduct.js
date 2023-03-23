import React from 'react';
import {useForm} from "react-hook-form";
import {useAddProductMutation} from "./redux/product";

const AddOneProduct = () => {

    const[addProduct] = useAddProductMutation()
    console.log(addProduct)
    const{
        register,
        reset,
        handleSubmit,
        formState:{
            errors
        }

    }=useForm({mode:'onBlur'})

    const postProduct = (product)=>{
        console.log(addProduct(product))
    }

    return (
        <div>
            <form action="" noValidate onSubmit={handleSubmit(postProduct)}>
                <input type="text" {...register('price',{
                    required:{
                        message:'заполните поле'
                    }
                })}/>
                <input type="text"{...register('image',{
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