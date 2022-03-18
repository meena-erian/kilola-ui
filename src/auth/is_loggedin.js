import get_session_token from "./get_session_token";

export default async function is_loggedin() {
    if (get_session_token()) {
        return true;
    }
    else return false;
}