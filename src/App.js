import React from 'react';
import hexsky from './IMG_6471.jpeg';
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
          <title>Sweg</title>
          {/* Home | Music | Places I've Been | Videos | Philanthropy | About */}
        </Helmet>
        <Heading 
          title="This Is My Website" 
          subtitle="I don't know what to put on it yet, so I am just making somewhat of a blank template of a website for now.  I will add random stuff as I think of it, I guess."
        />
        <NavBar />
        <img src={hexsky} className="Background" alt="background" />
      </header>
    </div>
  );
}

export default App;
