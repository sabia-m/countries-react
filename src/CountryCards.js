import React from 'react'

function CountryCards(props){
//
return (
    <div className="container">
    {props.allCountries.map(data => {
    return (
    <div className="card">

        <div className="flag">
        <img src={data.flag} alt="country flag"></img>
        </div>

        <h2>{data.name}</h2>

        <div className="country-info">
        <ul>
        <li>{"Population: " + data.population}</li>
        <li>{"Region: " + data.region}</li>
        <li>{"Capital: " + data.capital}</li>
        </ul>
    </div>

    </div>
    )
})
}
</div>
)
}

export default CountryCards