import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export const SearchRes = () => (
    <div>
      <form>
      <input className="textBoxSearch" type="text" placeholder="Person Name"/>
      <button className="buttonSearchSubmit">Search</button>
      </form>
      <h1>Display the search results here.</h1>
    </div>
  )