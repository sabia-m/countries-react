import React from 'react';
import './App.css';
import Search from './Search'
//import CountryCards from './CountryCards'
import data from './data/countriesAll.json'

function App() {
  return (
    <div className="App">
      <Search allCountries ={data}/>
    </div>
  );
}

export default App;
