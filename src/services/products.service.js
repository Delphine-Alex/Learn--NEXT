// import axios from 'axios';

const apiUrl = "http://localhost:1337/api"

export default {
    getProducts() {
        // return axios.get(`${apiUrl}/products?populate=image`)
        return fetch(`${apiUrl}/products?populate=*`)
            .then((res) => res.json())

    },
    getProduct(id) {
        // return axios.get(`${apiUrl}/products/${id}`)
        return fetch(`${apiUrl}/products/${id}`)
            .then((res) => res.json())
    }
}