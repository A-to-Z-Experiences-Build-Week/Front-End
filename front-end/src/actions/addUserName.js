import { ADD_NEW_USERNAME_TO_STATE } from './actionIndex';


export const addUserNameToState = (username) => dispatch => {
    return dispatch({type: ADD_NEW_USERNAME_TO_STATE, payload: username })
}