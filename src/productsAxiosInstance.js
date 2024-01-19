import axios from "axios";

const productsAxiosInstance=axios.create({
    baseURL:"https://fakestoreapi.com/products"
})

export default productsAxiosInstance