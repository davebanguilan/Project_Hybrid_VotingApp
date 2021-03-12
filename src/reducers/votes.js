import { FETCH_ALL, CREATE, SET_VOTES, DELETE } from '../constants/actionTypes'

const initialState = {
    votes: [],
}

// eslint-disable-next-line
export default (votes = [], action) => {
    switch (action.type) {

        // case SET_VOTES:
        //     return {...votes, votes: [...action.payload] };

        case SET_VOTES:
            return action.payload;

        case CREATE:
            return [...votes, action.payload];

        // case DELETE:
        //     return votes.filter((bug) => bug._id !== action.payload);

        // case UPDATE:
        //     return votes.map((bug) => bug._id === action.payload._id ? action.payload : bug);

        default:
            return votes;
    }
};