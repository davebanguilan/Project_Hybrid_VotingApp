import * as api from '../api';
import { FETCH_ALL, CREATE, SET_VOTES, DELETE } from '../constants/actionTypes'


export const getVotes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchVotes();
        // const data = [
        //     {Id: 1, Question: "Best Front End Framework?", Choice: "ReactJS;VueJS", Count: "5;1"}
        // ]

        dispatch({ type: SET_VOTES, payload: data });
    } catch (error) {
        console.log(error.message);
    } 
}

export const setVote = (newVote) => async(dispatch) => {
    try {
        const { data } = await api.createVote(newVote);
    
        dispatch({ type: CREATE, payload: data });
      } catch (error) {
        console.log(error);
      }
}