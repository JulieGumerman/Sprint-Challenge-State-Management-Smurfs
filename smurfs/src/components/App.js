import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";


const App = ({ getSmurfs}) => {

    useEffect(() => {
      getSmurfs();
    }, [getSmurfs])
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}


const mapStateToProps = state => {
  return {
    name: state.name,
    height: state.height
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
