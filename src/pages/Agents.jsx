import { Link, useLoaderData } from "react-router";
import "../api/agents.js"
import banner from "../img/banner.png"


export default function Agents() {
    const agents = useLoaderData();

    return (
        <>
            <img className="full-width" src={banner} alt="banner" />
             <ul>
                    {agents.map(agent => (
                        <li className="agent__li" key={agent.id}>
                    <Link to={`/agents/${agent.id}`}>
                    <figure className="agent__figure">
                    <img src={agent.image?.formats?.thumbnail?.url} alt={agent.name} />
                    </figure>
                    <p>{agent.name}</p>
                    <p>{agent.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
        
        </>
    )
}