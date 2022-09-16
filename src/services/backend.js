import axios from "axios";

const Connection = axios.create({
    baseURL: "http://localhost:3000",
})

export default Connection;