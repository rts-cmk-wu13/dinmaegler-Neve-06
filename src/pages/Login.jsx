import { Form, useLocation, useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react";
import "./contact.scss"

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
            login(userdata.jwt)
            navigate(from, { replace: true })
        }

    }

    return (
        <>
        <div>
            <h1 className="login__title">Log ind på din konto</h1>
        </div>
        <Form onSubmit={handleLogin}>
             <div className="formgroup__login">
                <label htmlFor="email">Email</label>
                <input type="email" name="identifier" placeholder="Email" />
            </div>
            <div className="formgroup__login">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            {error && (<div>{error}</div>)}
            <button className="home__button" type="submit">Log in</button>
        </Form>
        </>
    )
}