import React from 'react';
import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import Heading from './Fragments/Heading'
import NavBar from './Fragments/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
          <title>Home | Music | Places I've Been | Videos | Philanthropy | About</title>
        </Helmet>
        <Heading 
          title="Website" 
          subtitle="Very cool very swag i like it"
        />
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
