import httpService from './httpService'
const BASE_URL = '/mail';

export default {
    sendMail
}

async function sendMail(mail) {
    return await httpService.post(`${BASE_URL}`, mail)
}