import './Country.css'
const Country = ({country}) => {
    const {name, flags, area, capital, population} = country;
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <h4>Capital: {capital}</h4>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;