import { Link, useLoaderData } from "react-router";
import "../api/homes.js"
import banner from "../img/banner.png"


export default function List() {
    const homes = useLoaderData();

    return (
        <>
        <img className="full-width" src={banner} alt="banner" />
        <ul>
            {homes.map(home => (
                <li className="home__li" key={home.id}>
                    <Link to={`/list/${home.id}`}>
                    <figure className="home__figure">
                    <img src={home.images[0]?.formats?.thumbnail?.url} alt={home.name} />
                    </figure>
                    <p>{home.adress1}</p>
                    <p>{home.postalcode}</p>
                    <p>{home.city}</p>
                    </Link>
                </li>
            ))}
        </ul>
        </>
        
    )
}