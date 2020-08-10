import http from './axiosHttp'

const all = () => {
    return http.get('slides')
}

export default {all}