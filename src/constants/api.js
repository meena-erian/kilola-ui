const url = 'https://kilola-beta.portacode.com/api/v1';
const session_cookie_name = 'kilola-session'

const api = {
    login: '/login',
    register: '/register',
    user: '/user',
    user_farm: '/user/farm',
    user_batch: '/user/batch'
}

export {
    url,
    api,
    session_cookie_name
};