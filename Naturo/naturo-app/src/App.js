import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
//import Body from "./components/body";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <Body /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
