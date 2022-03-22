import {api} from "../constants/api";
import client from "./client"


export default async function register(username, first_name, last_name, password, email, type){
    var ret = await client.POST(
        api.register,
        {
            username,
            first_name,
            last_name,
            password,
            email,
            type
        }
    );
    if(ret.status === 'SUCCESS'){
        return true;
    }
    else {
        return false
    }
}