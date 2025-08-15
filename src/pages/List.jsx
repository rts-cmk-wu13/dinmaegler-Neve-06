import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import "../api/homes.js"
import { getHomes } from "../api/homes.js";

export default function List() {
    const homes = useLoaderData();

    return (

        <ul>
            {homes.map(home => (
                <li className="home__li" key={home.id}>
                    <Link to={`/list/${home.id}`}>
                    {/* <p>{home.adress1}</p> */}
                    <figure className="home__figure">
                    <img src={home.images[0]?.formats?.thumbnail?.url} alt={home.name} />
                    </figure>
                    </Link>
                </li>
            ))}
        </ul>
        
    )
}