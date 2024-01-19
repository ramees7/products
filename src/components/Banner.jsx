import React, { useEffect, useState } from 'react'
import "./Banner.css"
import productsAxiosInstance from '../productsAxiosInstance'

function Banner({fetchUrl}) {
  const [allProducts,setAllPorducts]=useState([])

  const fetchData=async()=>{
    const response=await productsAxiosInstance.get(fetchUrl)
    // setAllPorducts(response.data[Math.floor(Math.random()*response.data.length)])
    setAllPorducts(response.data[2])
    console.log(response.data[1])
          // console.log(Math.floor(Math.random()*response.data.length))
          console.log(allProducts)

  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='catagory'>
        {
        <div className='catagory-div'>
              <>
                <div className='catagory-content'>
                  <div className='catagory-imgtxt'>
                    <img className='catagory-img' src={`${allProducts.image}`} alt="" />
                    <h1 className='catagory-name'>{allProducts?.category}</h1>
                  </div>
                  
                </div>
              </>
        </div>
        }
    </div>

  )
}

export default Banner


{/* <img className='catagory-img' src={`${allProducts.image}`} alt="" /> */}
        {/* <h1 className='catagory-name'>{allProducts?.category}</h1> */}