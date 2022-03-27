import API from '../API/api';

export const GetAllUsers = (id) => {
    return API.get(`/users/get-users/`);
};

export const GetSingleUSer = (id) => {
    return API.get(`/users/get-single-user/${id}`);
};
