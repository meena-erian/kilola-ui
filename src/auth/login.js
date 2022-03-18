import {api, session_cookie_name } from "../constants/api";
import client from "./client"


export default async function login(username, password){
    var ret = await client.POST(api.login, {username, password});
    if('token' in ret){
        document.cookie = `${session_cookie_name}=${ret.token}`
        return true;
    }
    else {
        alert(JSON.stringify(ret, null, 2));
        return false
    }
}