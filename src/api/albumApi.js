import http from "./axiosHttp";

const get = (product_id) => {
    return http.get(`/albums?product_id=${product_id}`);
};

const create = data => {
    return http.post("/albums", data);
};

const update = (id, data) => {
    return http.put(`/albums/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/albums/${id}`);
};

const find = param => {
    return http.get(`albums?${param}`);
}


export default {
    get,
    create,
    update,
    remove,
    find
};