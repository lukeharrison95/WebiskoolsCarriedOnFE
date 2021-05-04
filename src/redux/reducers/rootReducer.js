import { combineReducers } from "redux";
import quizReducer from './quizReducers';



const rootReducer = combineReducers({
    quizStore: quizReducer
});

export default rootReducer;