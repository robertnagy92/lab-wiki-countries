import {Link} from 'react-router-dom'

const  Navbar = () => {
    return(
        <div className="NavBar">
            <nav className="navbar bg-info mb-2">
                <div className="container">
                    <Link to={"/"} style={{color: "white", fontSize:"2rem",textDecoration: 'none', textShadow: "2px 2px 2px black"}}>WikiCountries</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar