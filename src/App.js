import React from 'react';
// import hexsky from './IMG_6471.jpeg';
import { Helmet } from 'react-helmet';
import './App.css';
import Main from './Pages/Main';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <title>Corban Joyce</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
        <Main />
      </header>
    </div>
  );
}

export default App;
