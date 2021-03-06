import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAcademy = this.onChangeAcademy.bind(this);
    this.onChangeCoach = this.onChangeCoach.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      academy: "",
      coach: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
      coaches: []
    };
  }

  componentDidMount() {
    axios
      .get("/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/coaches/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            coaches: response.data.map(coach => coach.coach),
            coach: response.data[0].coach
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeAcademy(e) {
    this.setState({
      academy: e.target.value
    });
  }

  onChangeCoach(e) {
    this.setState({
      coach: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      academy: this.state.academy,
      coach: this.state.coach,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    console.log(exercise);

    axios.post("/exercises/add", exercise).then(res => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Select Academy: </label>
            <select
              required
              className="form-control"
              value={this.state.academy}
              onChange={this.onChangeAcademy}
            >
              <option value="" disabled>
                -- Select an academy --
              </option>
              <option value="Life Kicks">Life Kicks</option>
              <option value="Life Hoops">Life Hoops</option>
            </select>
          </div>
          <div className="form-group">
            <label>Coach: </label>
            <select
              required
              className="form-control"
              value={this.state.coach}
              onChange={this.onChangeCoach}
            >
              <option value="" disabled>
                -- Select a coach --
              </option>
              {this.state.coaches.map(function(coach) {
                return (
                  <option key={coach} value={coach}>
                    {coach}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
