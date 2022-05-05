import API from '../API/api';

export const Login = (user) => {
    console.log(user);
    console.log(process.env.REACT_APP_API_KEY);
    return API.post('/admin/login', user);
}

export const GetCollegesData = () => {
    return API.get('/ccd/get-colleges');
}

export const GetCoursesData = async () => {
    return await API.get('/ccd/get-courses');
}

export const GetCategoriesData = async () => {
    return await API.get('/ccd/get-category');
}

export const GetUSersData = async () => {
    return await API.get('/users/get-users')
}

export const GetAdminsData = async () => {
    return await API.get('/admin/get-admins')
}

export const InsertAdminData = async (admin) => {
    return await API.post('/admin/addAdmin', admin)
}

export const GetRoles = async () => {
    return await API.get('/admin/get-roles');
}

export const DeleteVolunteer = async (id) => {
    console.log(id)
    return await API.delete(`/admin/remove-volunteer/${id}`);
}

export const DeleteUser = async (id) => {
    console.log(id)
    return await API.delete(`/users/remove-user/${id}`);
}
