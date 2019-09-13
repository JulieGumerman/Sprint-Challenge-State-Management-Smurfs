import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addMoreSmurfs } from "../actions/index";


const App = ({ getSmurfs, addMoreSmurfs, smurfs}) => {
  const [newSmurf, setNewSmurf] = useState({name: "", age: "", height: "", id: ""})

    const handleChange = event => {
      setNewSmurf({...newSmurf, [event.target.name]: event.target.value});
    }
    
    const submitHandler = event => {
      event.preventDefault();
      addMoreSmurfs(newSmurf);
      console.log(newSmurf);
    }

    useEffect( ()=> {
      getSmurfs();
    }, [getSmurfs])


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="smurf-wrapper">
        {smurfs.map(smurf => <div className="smurf-card"><h3>{smurf.name}</h3><h5>Age: {smurf.age}</h5><h5>Height: {smurf.height}</h5></div>)}
      </div>
      <form>
        <label>Add a new smurf!</label>
        <input placeholder="name" name="name" onChange={event => handleChange(event) }/>
        <input placeholder="age" name="age" onChange={event => handleChange(event)}/>

        <input placeholder="height" name="height" onChange={event => handleChange(event)}/>
        <input id="id" name="id" onChange={event => handleChange(event)}/>
        <button type="submit" onClick={submitHandler}>add</button>
      </form>
      </div>
    );
}

/*********************Functional component above this line, Class beneath*** */
// class App extends React.Component {
//   constructor({ getSmurfs, addMoreSmurfs, smurfs}) {
//     super({ getSmurfs, addMoreSmurfs, smurfs}); 
//     this.state = {
//       name: "", 
//       age: "",
//       height: ""
       
//     }
//   }

//     componentDidMount() {
//        getSmurfs();
//  }
//   componentDidUpdate() {
//     const handleChange = event => {
//       this.setState({...this.state, [event.target.name]: event.target.value});
//     }

// const submitHandler = event => {
//       event.preventDefault();
//        addMoreSmurfs(this.state);        
//       console.log(this.state);
//     }
// }




// render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//         <div>
//         {smurfs.map(smurf => <h3>{smurf.name}</h3>)}
//       </div>
//       <form>
//         <label>Add a new smurf!</label>
//         <input placeholder="name" name="name" onChange={event => handleChange(event) }/>
//         <input placeholder="age" name="age" onChange={event => handleChange(event)}/>

//         <input placeholder="height" name="height" onChange={event => handleChange(event)}/>
//         <input id="id" name="id" onChange={event => handleChange(event)}/>
//         <button type="submit" onClick={submitHandler}/>
//       </form>
//       </div>
//     );
//    }
// }



const mapStateToProps = state => {
  console.log("state from app", state);
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs, addMoreSmurfs})(App);
