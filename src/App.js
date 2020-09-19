import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
// import Basic1 from './components/Basic1';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContainer from './components/TimerContainer';
// import ApiFetch from './components/ApiFetch';
import AppContext from './contexts/AppContext';
// import Child from './components/Child';
// import BasicReducer from './components/BasicReducer';
// import ChildComp from './components/ChildComp';

import { useReducer, useState } from 'react';
// import Memo from './components/Memo';
import CountDisplay from './components/CountDisplay';
import CountClick from './components/CountClick';

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case 'add_1':
      return currentState + 1;
    case 'multiple_3':
      return currentState * 3;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const AddCount2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 1);
  }, []);

  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <Basic1 name="Tanaka" /> */}
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch />
          <Child /> */}
          {/* <BasicReducer /> */}
          {/* Count {count} */}
          {/* <ChildComp /> */}
          {/* <Memo /> */}
          <CountDisplay name="count1" count={count1} />
          <CountClick handleClick={AddCount1}>AddCount1</CountClick>
          <CountDisplay name="count2" count={count2} />
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
