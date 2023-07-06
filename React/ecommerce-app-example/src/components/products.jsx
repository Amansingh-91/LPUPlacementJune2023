import React from 'react'
import products from "../productData";
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

const ProductList =()=>{
    return     (<div>
    <h1>All products</h1>
    {
        
        products.map(product=>{
           return (
           <div key={product.id}> 
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
            </div>
            );
        })
    }
    
</div>);
}
const Products = () => {
    const isLoggedIn = useSelector(state=>state.userReducer);
    const navigate = useNavigate();
    
    if(isLoggedIn){
        return <ProductList></ProductList>
    }
    else{
        navigate("/login");
    }
}

export default Products