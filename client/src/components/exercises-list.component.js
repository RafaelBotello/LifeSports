import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.academy}</td>
    <td>{props.exercise.coach}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("/exercises/")
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("/exercises/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <>
        <div className="loggedContainer">
          <h3 className="logged">Logged Exercises</h3>
          <table className="tableLogs">
            <thead className="thread">
              <tr>
                <th className="columns">Username</th>
                <th className="columns">Academy</th>
                <th className="columns">Coach</th>
                <th className="columns">Description</th>
                <th className="columns">Duration</th>
                <th className="columns">Date</th>
                <th className="columns">Actions</th>
              </tr>
            </thead>
            <tbody>{this.exerciseList()}</tbody>
          </table>
        </div>
        <h3 className="top4">Top 4 Best Example Exercises!</h3>
        <div className="pictureContainer">
          <div className="pContainer">
            <p className="description">
              {" "}
              Lunges: Benefits of strengthening the legs. Targeting large
              muscles groups of the lower body. Boosts the metabolism.
            </p>
          </div>
          <img
            src="https://shapeyourfutureok.com/wp-content/uploads/2017/03/22230-TSET-SYF-Move-More-Website-Optimizations_Grid_MainImage_400x400_Kids-Lunges.png"
            className="pictures"
            alt="Lunges"
          />
        </div>
        <div className="pictureContainer">
          <div className="pContainer">
            <p className="description">
              {" "}
              Push-Ups: Beneficial for building upper body strength. Works on
              the Triceps, Pectoral Muscles and Shoulders. Fast and effective
              exercise for building strength.
            </p>
          </div>
          <img
            src="https://shapeyourfutureok.com/wp-content/uploads/2017/03/22230-TSET-SYF-Move-More-Website-Optimizations_Grid_MainImage_400x400_Kids-PushUps.png"
            className="pictures"
            alt="Push-Ups"
          />
        </div>
        <div className="pictureContainer">
          <div className="pContainer">
            <p className="description">
              {" "}
              Yoga: Increases Flexibility, Muscle Strength and Tone. Improves
              Respiration, Energy and Vitality! Also, helps Athletic
              Performance.
            </p>
          </div>
          <img
            src="https://31at25pik4920sm701ldajta-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/22230-TSET-SYF-Move-More-Website-Optimizations_Grid_MainImage_400x400_Yoga-TreePose.png"
            className="pictures"
            alt="Yoga"
          />
        </div>
        <div className="pictureContainer">
          <div className="pContainer">
            <p className="description">
              {" "}
              Balance: Injury Prevention, Performance Enhancement and Strength
              of the Core Muscles. Improvement of Coordination.
            </p>
          </div>
          <img
            src="https://31at25pik4920sm701ldajta-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/22230-TSET-SYF-Move-More-Website-Optimizations_Grid_MainImage_400x400_Yoga-Airplane-e1490289917817.png"
            className="pictures"
            alt="Leg Balance"
          />
        </div>
      </>
    );
  }
}
