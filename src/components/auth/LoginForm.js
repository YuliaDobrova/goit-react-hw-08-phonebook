import React, { Component } from "react";

const styles = {
  form: {
    marginTop: 10,
  },
  label: {
    marginRight: 5,
    marginLeft: 5,
  },
  input: { marginRight: 5 },
};

class LoginForm extends Component {
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
      <form style={styles.form} onSubmit={this.onHandleSubmit}>
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="text"
            name="email"
            onChange={this.onHandleChange}
            value={email}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            style={styles.input}
            type="text"
            name="password"
            onChange={this.onHandleChange}
            value={password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
