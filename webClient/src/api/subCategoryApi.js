import axios from 'axios';
import API from '@/api';

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

// export const signIn = (formData) => API.post('/auth/signin', formData);
// export const signUp = (formData) => API.post('/auth/signup', formData);

// MODEL
export const fetchSubCategories = () => API.get('/sub-categories');
// export const createModel = (newModel) => API.post('/maintenance/composite/models', newModel);
// export const updateModel = (id, updateModel) => API.patch(`/maintenance/composite/models/${id}`, updateModel);
// export const deleteModel = (id) => API.delete(`/maintenance/composite/models/${id}`);
 