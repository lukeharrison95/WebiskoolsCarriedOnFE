import React from 'react';
import { Route } from "react-router-dom";
import ProtectedRoute from "./components/general/protectedRoute";
import HomePage from "./components/pages/homepage";
import ViewPage from './components/pages/viewPage';
import EditPage from './components/pages/editPage';
import NavBar from './components/general/navbar';
import CreatePage from './components/pages/createPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/pages/loginPage';
import './App.css';
import { useSelector } from 'react-redux';


function App() {

  const user = useSelector( (state) => state.users.currentUser)
  return (
    <div className="App">
          <Route path="/" component={NavBar}/>
          <ProtectedRoute exact path="/" component={HomePage}  currentUser={ user } />
          <ProtectedRoute path="/viewQuiz" component={ViewPage} currentUser={ user } />
          <ProtectedRoute path="/editQuiz" component={EditPage} currentUser={ user }/>
          <ProtectedRoute path="/createQuiz" component={CreatePage} currentUser={ user }/>
          <Route exact path="/login" component={LoginPage}/>

     
    </div>
  );
}

export default App;
