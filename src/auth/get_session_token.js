import { session_cookie_name } from "../constants/api";


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function get_session_token() {
    return getCookie(session_cookie_name);
}

export default get_session_token;