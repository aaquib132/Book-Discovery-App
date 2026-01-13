import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://openLibrary.org",
    timeout: 5000
});

export default apiClient;