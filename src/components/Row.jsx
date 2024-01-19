import React, { useEffect, useState } from 'react'
import "./Row.css"
import productsAxiosInstance from '../productsAxiosInstance'


function Row({title,fetchUrl}) {

    const[allProducts,setAllPorducts]=useState([])


    const fetchData=async ()=>{
        const response=await productsAxiosInstance.get(fetchUrl)
        console.log(response.data)
        setAllPorducts(response.data)
        console.log(allProducts)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='Row'>
        <h1>{title}</h1>
        <div className='products-row'>
            {
                allProducts?.map((item)=>(
                    <>
                    <div>
                        <img className='products-img' src={`${item.image}`} alt="" />
                        <h5 className='products-name'>{item.title}</h5>
                        <h4>PRICE : ₹ {item.price}</h4>
                    </div>
                        
                    </>
                    ))
            }
        </div>
    </div>
  )
}

export default Row