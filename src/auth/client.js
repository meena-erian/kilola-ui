import { url } from "../constants/api";
import get_session_token from "./get_session_token";

const client = {
    POST: async function (endpoint, data) {
        var token = get_session_token();
        var res = await fetch(`${url}${endpoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token ? `Token ${token}` : undefined
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    },
    GET: async function (endpoint) {
        var token = get_session_token();
        return fetch(`${url}${endpoint}`, {
            method: 'GET',
            headers: {
                "Authorization": token ? `Token ${token}` : undefined
            }
        })
    }
}

export default client;