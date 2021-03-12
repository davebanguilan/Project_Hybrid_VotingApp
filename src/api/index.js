import axios from 'axios';

const API = axios.create({
    baseURL: "https://localhost:44351/",
});

export const fetchVotes = () => API.get('/votes');

export const createVote = (newVote) => API.post('/votes', newVote);