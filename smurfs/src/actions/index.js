import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const DISPLAY_SMURFS = 'DISPLAY_SMURFS';
export const SET_ERROR = 'SET_ERROR';

export const visitVillage = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('smurf get request', res);
            dispatch({ type: DISPLAY_SMURFS, payload: res.data })
        })
        .catch(err => {
            console.log('Oh no! 😪 The Smurf village is closed for the day', err);
            dispatch({ type: SET_ERROR, payload: err.data })
        });
}

export const buildVillage = (newbornSmurf) => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', newbornSmurf)
        .then(res => {
            console.log('New village Smurf created!', res);
            dispatch({ type: DISPLAY_SMURFS, payload: res.data })
        })
        .catch(err => {
            console.log('Oh no! 😪 the Smurf factory is closed', err);
            dispatch({ type: SET_ERROR, payload: err.data })
        })
}
