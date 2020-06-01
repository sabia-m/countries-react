import React from 'react';
import './App.css';
import CountryCards from './CountryCards'
import data from './data/countriesAll.json'

function App() {
  return (
    <div className="App">
      <CountryCards allCountries ={data}/>
    </div>
  );
}

export default App;
