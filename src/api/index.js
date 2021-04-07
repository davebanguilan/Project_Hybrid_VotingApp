import axios from 'axios';

const API = axios.create({
    baseURL: "https://votingappbackend.azurewebsites.net/",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
  
    return req;
});

export const fetchVotes = () => API.get('/votes');

export const createVote = (newVote) => API.post('/votes', newVote);

export const editVote = (editedVote) => API.put('/votes', editedVote);

export const deleteVote = (deleteVote) => API.delete('/votes', {data: {...deleteVote}});

//auth

export const signIn = (formData) => API.post('/Authentication/signin', formData);
export const signUp = (formData) => API.post('/Authentication/signup', formData);