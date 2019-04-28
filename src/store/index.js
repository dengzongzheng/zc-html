import accessToken from "./token-reducer";
import {createStore} from 'redux';

// const reducers = combineReducers({
//     accessToken:accessToken
// });
const store = createStore(accessToken);

export default store;
