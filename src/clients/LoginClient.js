import axios from "axios";

const API_URL = "http://localhost:8082/auth";

export default {
    login(user, password) {
        return axios.get(`${API_URL}/token`, {
            params: {
                user: user,
                password: password
            }
        });
    }
}