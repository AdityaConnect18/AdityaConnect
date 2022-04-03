import API from '../API/api';

export const Login = (user) => {
    console.log(user);
    console.log(process.env.REACT_APP_API_KEY);
    return API.post('/admin/login', user);
}

export const GetCollegesData = () => {
    return API.get('/ccd/get-colleges');
}

export const GetCourses = async () => {
    return await API.get('/ccd/get-courses');
}

