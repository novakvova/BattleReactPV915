import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:15247/",
    headers: {
        "Content-type": "application/json"
    }
});