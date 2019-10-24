import React, { Component } from "react";
import axios from "axios";

export default class CreateCoach extends Component {
  constructor(props) {
    super(props);

    this.onChangeCoach = this.onChangeCoach.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      coach: ""
    };
  }

  onChangeCoach(e) {
    this.setState({
      coach: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const coach = {
      coach: this.state.coach
    };

    console.log(coach);

    axios.post("/coaches/add", coach).then(res => console.log(res.data));

    this.setState({
      coach: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Coach</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Coach: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.coach}
              onChange={this.onChangeCoach}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add coach"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
