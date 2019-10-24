import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Components/navbar.component"
import Carousel from "./Components/Home/Carousel.jsx";
import AboutCoaches from "./Components/Home/AboutCoaches.jsx";
import ExercisesList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercise.component";
import CreateExercise from "./Components/create-exercise.component";
import CreateUser from "./Components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Carousel} />
      <Route path="/aboutcoaches" component={AboutCoaches} />
  
      <Route path="/exercises" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
