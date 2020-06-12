import { FETCH_SMURFS, DISPLAY_SMURFS, SET_ERROR } from '../actions';

const initialState = {
    villagers: [
        {
            name: 'Brainey',
            age: 200,
            height: '5cm',
            id: 0
        }
    ],
    error: ''
};

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
            console.log('redu smurfs', action.payload)
            return {
                ...state,
                villagers: action.payload
            };
        case DISPLAY_SMURFS:
            return {
                ...state,
                villagers: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};