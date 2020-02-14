import axios from "axios";

export default {
    getAllProducts: (q) => {
        if (!q) {
            q = "iphone*"
        }
        return axios.get("/api/products?q="+q);
    },
    getCart: () => {
        return axios.get("/api/products/cart");
    },
    getByCategory: (category) => {
        return axios.get("/api/products/category/"+category);
    },
    getByID: (id) => {
        return axios.get("/api/products/id/"+id);
    },
    addProduct: (product) => {
        return axios.post('/api/products', product);
    },
    removeProduct: (id) => {
        return axios.delete('/api/products/id/'+id);
    },
    updateQuantity: (item) => {
        return axios.put('/api/products/id/'+item._id, item);
    },
    userLogin: (user) => {
        return axios.post('/api/users/login', user);
    },
    userRegister: user => {
        return axios.post('/api/users/signup',user);
    }
}