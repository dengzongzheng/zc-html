import {
    SET_ACCESS_TOKEN,
    GET_ACCESS_TOKEN
} from '@/constant/ActionTypes';

export const setAccessToken = (action) => {
    return {
        type: SET_ACCESS_TOKEN,
        value: action.value
    };
};

export const getAccessToken = () => {
    return {
        type: GET_ACCESS_TOKEN,
        value: action.value
    };
};
