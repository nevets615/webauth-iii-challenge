import React from "react";
import axios from "axios";
class Login extends React.Component {
  state = {
    username: "",
    password: "password"
  };
  render() {
    return (
      <>
        <h2>Login</h2>
        <form>
          <div>
            <lable htmlFor="username" />
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <lable htmlFor="password" />
            <input
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
        </form>
      </>
    );
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
  submitForm = event => {
    event.preventDefault();
    const endpoit = "http://localhost:5000/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("tok", res.data.token);
      })
      .catch(err => {
        console.log("Login error", err);
      });
  };
}

export default Login;
