import React from 'react';
import { render } from 'react-dom';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  };

  clickFunction = () => {
    let currCount = this.state.count;
    this.setState((prev) => ({
      count: ++currCount,
    }));
  };

  render() {
    return(
      <div className="counter-box" onClick={this.clickFunction}>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

class CounterContainer extends React.Component {
  // {let counters = [];
  // for(let i = 0; i < 5; i++) {
  //   counters.push(<Counter key={i} />);
  // }}

  addCounters() {
    let counters = [];
    for(let i = 0; i < 5; i++) {
      counters.push(<Counter key={i} />);
    }
    return counters;
  }

  render() {
    return(
      <div className="counter-container">
        {this.addCounters()}
      </div>
    );
  };
}

function App() {
  return(
    <div className="App">
      <h1 className="heading">COUNTERS!!</h1>
      <CounterContainer />
    </div>
  );
}

export default App;
