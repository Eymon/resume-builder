import React, { Component } from 'react';
import Resume from './Resume';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Resume />
    </div>
  );
};

export default App;