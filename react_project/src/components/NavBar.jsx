import { Link } from "react-router-dom";
import "../css/NavBar.css"

function navBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie</Link>
            </div>
            <div className="navbar links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default navBar;