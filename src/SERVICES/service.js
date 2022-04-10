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

