import React, { Component } from "react";

class Auth extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            onChange={this.onHandleChange}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            onChange={this.onHandleChange}
            value={password}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Auth;
