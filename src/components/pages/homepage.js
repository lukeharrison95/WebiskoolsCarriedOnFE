import React, { useEffect } from "react";
import QuizContainer from "../dataContainers/QuizContainers"
import { useSelector, useDispatch } from "react-redux";
import { getQuizzes} from "../../redux/actions/quiz/quizActions";


const HomePage = () => {
    const dispatch = useDispatch();
    const quizStore = useSelector((state) => state.quizStore);

    useEffect(() =>{
        dispatch(getQuizzes());
    }, [quizStore.updateNeeded]);

    return (
        <div className="pages">
        <QuizContainer quizStore={quizStore}/>
        </div>   
    )
};


export default HomePage;