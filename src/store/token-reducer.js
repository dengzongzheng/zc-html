import {
    SET_ACCESS_TOKEN,
    GET_ACCESS_TOKEN
} from '@/constant/ActionTypes';

const initialState = {
    accessToken:"",
    count:0
}

export default (state, action) => {
    if(state==undefined){
        state = initialState;
    }
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return ({
                accessToken:action.value
            });
            // return state ;
        case GET_ACCESS_TOKEN:
            state.accessToken="dzz"+state.count;
            state.count = state.count-1;
            return state;
        default:
            return state;
    }
};


