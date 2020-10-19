const initialState = {
    username: '',
    profile: '',
    userId: 0,

}

const GET_USER = 'GET_USER';
const CLEAR_USER = 'CLEAR_USER';

function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

function clearUser (){
    return {
        type: CLEAR_USER,
        payload: ''
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case GET_USER:
            return {...state, user: payload}; 
        default:
            return state;
        }
    
  }