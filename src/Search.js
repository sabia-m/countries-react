import React, {useState} from "react";
import countryData from './data/countriesAll.json'
import CountryCards from "./CountryCards";

function Search(){
  const [search, setSearch] = useState(countryData)

  function FilteredCountries(value){
   return setSearch(countryData.filter((e) => e.name.toLowerCase().includes(value)|| e.capital.toLowerCase().includes(value)))
  }

  return (
    <div className="search-countries-capitals">
        <h1>World Stats</h1>
    <div className="search-bar">
      <input className="search" type="search" placeholder="Search Names Here" onChange={e => FilteredCountries(e.target.value)}>
      </input>
      </div>
      
      <CountryCards allCountries={search}/>
    </div>
  );
};

export default Search;