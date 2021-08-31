import axios from "axios"

export default class ApiServise {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/products/", {})
        return response
    }
}