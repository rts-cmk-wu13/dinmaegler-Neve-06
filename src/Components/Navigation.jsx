import { NavLink } from "react-router"
import './navigation.scss'
export default function Navigation() {

    return (
        <nav className="navigation">
            <figure className="logo">
            <img src="src/img/logo.svg" alt="logo" />
            </figure>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/list">Boliger til salg</NavLink>
                <NavLink to="/contact">Kontakt os</NavLink>
            
            </nav>
    )
}