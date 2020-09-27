import React, { Component, Fragment } from "react";
import { Container, Button, TextField, Paper } from "@material-ui/core";

class AddListing extends Component {
  state = {
    name: "",
    description: "",
    address: "",
    hours: "",
  };

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = this.props.listings.length + 1;

    console.log("The List", payload);
    // add this.props.addCar function here
    this.props.addListing(payload);
    // window.location.replace("/");
  };

  render() {
    return (
     
          <div >
            <Container maxWidth="dm" className="list-container">
              <Paper>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="hours"
                  placeholder="Hours"
                  value={this.state.hours}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
              </Paper>
            </Container>
          </div>
       
    );
  }
}

export default AddListing;
