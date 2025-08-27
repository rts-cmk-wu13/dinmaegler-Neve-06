import { useLoaderData } from "react-router"
import Contact from "./Contact"
import banner from "../img/banner.png"

export default function Agent() {

    const agent = useLoaderData()
    return (
        <>
        <img className="full-width" src={banner} alt="banner" />
        <article className="agent__container">
            <figure className="agent__figure-detail">
            <img src={agent.image?.formats?.thumbnail.url} alt={agent.name} />
            </figure>
            <section className="agent__section">
                <h2>{agent.name}</h2>
                <p>{agent.title}</p>
                <p>{agent.phone}</p>
                <p>{agent.email}</p>
            </section>
        <section className="agent__description">
            <h2>Om {agent.name}</h2>
            <p>{agent.description}</p>
        </section>
        </article>
        <section className="agent__contact">
            <p className="agent__contact-text">Kontakt {agent.name}</p>
        <Contact/>
        </section>
        </>
    )
}