import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { IncCounter, DecCounter, UpdateInput } from './actions';
import { reducerType } from './reducers';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: reducerType) => state.counter);
  const input = useSelector((state: reducerType) => state.input);
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <input type="number" value={input} onChange={(e) => {
        dispatch(UpdateInput(parseInt(e.target.value)));
      }}/>
      <button onClick={() => {
        dispatch(IncCounter(input));
      }}>
        +
      </button>
      <section>{counter}</section>
      <button onClick={() => {
        dispatch(DecCounter(input));
      }}>
        -
      </button>
    </div>
  );
}

export default App;
