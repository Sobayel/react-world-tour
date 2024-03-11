import { useState } from 'react';
import './Country.css'
import CountryDetails from '../countryDetails/CountryDetails';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, area, capital, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handlerVisited = () =>{
        setVisited(!visited);
    }

    // mark button function //handler theke parameter patai
    const passWithParams = () =>handleVisitedCountry(country);

    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited? 'purple' : 'black'}}>Name: {name?.common}</h3>
            <h4>Capital: {capital}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handlerVisited}>{visited? 'Visited': 'Not Visited'}</button>
            {/* {visited && ' I have visited this country'} */}
            {visited? ' I have visited this country': 'I want to visited'}
            <br />
            <CountryDetails>
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            </CountryDetails>
        </div>
    );
};

export default Country;