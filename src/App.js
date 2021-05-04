import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/homepage";
import ViewPage from './components/pages/viewPage';
import EditPage from './components/pages/editPage';
import NavBar from './components/general/navbar';
import CreatePage from './components/pages/createPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/pages/loginPage';
import './App.css';


function App() {
  return (
    <div className="App">
          <Route path="/" component={NavBar}/>
          <Route exact path="/" component={HomePage} />
          <Route path="/viewQuiz" component={ViewPage}/>
          <Route path="/editQuiz" component={EditPage}/>
          <Route path="/createQuiz" component={CreatePage}/>
          <Route path="/login" component={LoginPage}/>

     
    </div>
  );
}

export default App;
