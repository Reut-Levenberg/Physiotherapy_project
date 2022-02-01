import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/Footer'
import {EntranceManagement} from './components/EntranceManagement'
import {Main} from './components/Main'

function App() {

  return (
    <div className="App">
      <EntranceManagement/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;