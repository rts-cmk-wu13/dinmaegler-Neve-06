import { useAuth } from "../contexts/AuthContext"
import { useNavigate, Link } from "react-router"

export default function LogoutButton() {
    const { token, logout } = useAuth();
    const navigate = useNavigate()

    function handleLogout () {
        logout()
        navigate("/")
    }

    return token ? (
        <Link to="/" onClick={handleLogout}>Log out</Link>
    ) : <Link to="/login">Login</Link>
}