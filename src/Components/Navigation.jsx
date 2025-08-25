import { NavLink } from "react-router"
import './navigation.scss'
import logo from '../img/logo.svg'
export default function Navigation() {

    return (
        <nav className="navigation">
            <NavLink to="/">
                <figure className="logo">
                    <img src={logo} alt="logo" />
                </figure>
            </NavLink>
            <NavLink to="/list">Boliger til salg</NavLink>
            <NavLink to="/agents">Mælgere</NavLink>

            <NavLink to="/contact">Kontakt os</NavLink>

        </nav>
    )
}