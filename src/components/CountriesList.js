import { Link } from 'react-router-dom'

 const CountriesList = ({ countries }) => {
    return (
        <div className="list-group">
            {countries.map((country) =>
                <Link
                    key={country.alpha3Code}
                    className="list-group-item list-group-item-action"
                    to={`/${country.alpha3Code}`}>
                    <img style={{width: "25%"}} src={country.flag} alt="countryimage"/>{country.name}</Link>
            )}
        </div>

    )
}

export default CountriesList