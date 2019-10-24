import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route} from "react-router-dom";
import "../src/App.css"
=======
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>> 7565dce1cba7e99cd456c29f5f0cfabe29195e75

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateCoach from "./components/create-coach.component";
import Carousel from "./components/Home/Carousel.jsx";
import AboutCoaches from "./components/Home/AboutCoaches.jsx";

function App() {
  return (
    <Router>
      <div className="container">
<<<<<<< HEAD
      <Navbar />
      <br/>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
=======
        <Navbar />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/coach" component={CreateCoach} />
        <Route path="/" exact component={Carousel} />
        <Route path="/aboutcoaches" component={AboutCoaches} />
        <Route path="/exercises" component={ExercisesList} />
>>>>>>> 7565dce1cba7e99cd456c29f5f0cfabe29195e75
      </div>
    </Router>
  );
}

export default App;
