import { Link, NavLink } from "react-router"
import Hero from "../Components/Hero"
import Family from "../Components/Family"
import HomepageApartments from "../Components/HomepageApartments"

export default function Home() {

    return (
        <>
            <Hero />
            <Family/>
            <HomepageApartments/>
        </>
    )
}