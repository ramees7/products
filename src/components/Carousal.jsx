import React from 'react'
// import React, { useEffect, useState } from 'react'
import "./Carousal.css"
// import productsAxiosInstance from '../productsAxiosInstance'


function Carousal() {
// function Carousal({fetchUrl}) {

//   const [allProducts,setAllPorducts]=useState({})

//   const fetchData=async()=>{
//     const response=await productsAxiosInstance.get(fetchUrl)
//     setAllPorducts(response.data[Math.floor(Math.random()*response.data.length)])

//     console.log(Math.floor(Math.random()*response.data.length))
//     console.log(allProducts)
//   }
//   useEffect(()=>{
//     fetchData()
// },[])

  return (
    <div className='carousal' >
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a2d45385904d2bfa.jpg?q=20" alt=""  className='carousal-img'/>
    </div>
 
  )
}

export default Carousal


