import { Link, NavLink } from "react-router"
import Hero from "../Components/Hero"
import Family from "../Components/Family"
import Boliger from "../Components/Boliger"

export default function Home() {

    return (
        <>
            <Hero />
            <Family/>
            <Boliger/>
        </>
    )
}