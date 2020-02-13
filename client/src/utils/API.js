import axios from "axios";

export default {
    getAllProducts: (q) => {
        if (!q) {
            q = "iphone*"
        }
        return axios.get("/api/products?q="+q);
    },
    getByCategory: (category) => {
        return axios.get("/api/products/category/"+category);
    },
    getByID: (id) => {
        return axios.get("/api/products/id/"+id);
    },
    
}