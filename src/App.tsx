import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Header from './component/header/index';
import Bottom from './component/bottom/index';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
      <Bottom />
    </>
  );
}
