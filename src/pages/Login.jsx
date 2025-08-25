import { Form, useLocation, useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react";

export default function Login() {
    const [error, setError] = useState();
    const {login} = useAuth()
    const location = useLocation();
    const navigate = useNavigate()

    console.log(location)
    const from = location.state?.from?.pathname || "/"
    console.log(from)

    async function handleLogin(event) {
        event.preventDefault()
        console.log(event.target.password.value)
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())

        console.log(data)
        // validér her...

        const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const userdata = await response.json()

        console.log(userdata)

        if(!response.ok) {
            setError(userdata.message || userdata.error || "Please provide login credentials")
        } else {
            login(userdata.accessToken)
            navigate(from, { replace: true })
        }

    }

    return (
        <Form onSubmit={handleLogin}>
             <div className="formgroup">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Indtast email" />
            </div>
            <div className="formgroup">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            {error && (<div>{error}</div>)}
            <button type="submit">Log in</button>
        </Form>
    )
}