import { Link } from 'react-router-dom'

const CountryDetails = ({countries, match}) => {
   
    const params = match.params.code
    const country = countries.find((c) => c.alpha3Code === params)

    return (
        <div className="CountryDetails">
            
            <h1>{country.name}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((border,index) => {
                                    const borderName = countries.find((country) => country.alpha3Code === border)
                                    return <li style={{listStyle: "none"}} key={index}><Link to={`/${borderName.alpha3Code}`}>{borderName.name}</Link></li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails