import React from 'react'
import { useNavigate } from "react-router-dom"
import { products } from '../data';
import { MdArrowBack } from "react-icons/md"

function Cart({IDcart}) {
    console.log(IDcart,"cartdata");

    const result = products.find((items)=>items.id === IDcart);
    console.log(result,"result");

    const navigate = useNavigate();

    const handleback = ()=> navigate(-1);
    
  return (
    <div>
        <div>
            <p onClick={handleback}><MdArrowBack/></p>
        </div>
        <div>
            <img src={result.Image}/>
            <p>{result.name}</p>
            <p>{result.Body}</p>
            <p>${result.price}</p>

        </div>
    </div>
  )
}

export default Cart