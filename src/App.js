import React from 'react';
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
        </Helmet>
        <Main />
      </header>
    </div>
  );
}

export default App;
