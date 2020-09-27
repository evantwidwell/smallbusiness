import React from "react";
import { Component } from "react";
import { TextField, Button, Container } from "@material-ui/core";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000*5";

    console.log(document.cookie);
    const payload = { ...this.state };
    console.log("THE USER", payload);
    console.log(this.props);
    this.props.setUser(payload);
    console.log(this.props.user);
    window.location.replace("/");
  };

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <br></br>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <br></br>
            <br></br>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;
