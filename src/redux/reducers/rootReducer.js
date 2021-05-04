import { combineReducers } from "redux";
import quizReducer from './quizReducers';
import userReducer from './userReducers';



const rootReducer = combineReducers({
    quizStore: quizReducer,
    users: userReducer
});

export default rootReducer;