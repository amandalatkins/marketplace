import axios from "axios";

export default {
    getAllProducts: () => {
        return axios.get("https://localhost:3000/api/products");
    },
    getByCategory: (category) => {
        return axios.get("/api/products/"+category);
    },
    getByID: (id) => {
        return axios.get("/api/products/"+id);
    }
}