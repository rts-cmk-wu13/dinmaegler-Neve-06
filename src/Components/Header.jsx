import { useLocation } from "react-router"
import LogoutButton from '../Components/LogoutButton'
import Navigation from './Navigation'

export default function Header() {
    const location = useLocation()

    console.log(location.pathname)

    return (
        <header>
            {location.pathname !== "/login" && (
                <>      
                <nav className="header__container full-width">  
                    <p>4000@dinmaegler.com</p>
                    <p>+45 7070 4000</p>     
                    <LogoutButton />
                    </nav>   
                    <Navigation />
            </>
            )}
        </header>
    )
}