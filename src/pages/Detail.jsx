    import { useLoaderData } from "react-router"

export default function Detail() {
    const home = useLoaderData(); // indlæs data fra loader funktion

    return  (
        <>
        <img className="full-width" src={home.images[0]?.formats?.thumbnail?.url} alt={home.name} />
        <section>
            <h2>{home.adress1}</h2>
            <section>
            <p>{home.city}</p>
            <p>{home.postalcode}</p>
            </section>
        </section>
        <div>
        <section  className="description__container">
            <h2>Beskrivelse</h2>
            <p>{home.description}</p>
        </section>
        <section  className="description__container">
            <h2>Ansvalig Mælger</h2>
            <figure>
            <img className="full-width" src={home.agent.image?.formats?.thumbnail?.url} alt={home.agent.name} />
            </figure>
            <h2>{home.agent.name}</h2>
            <p>{home.agent.title}</p>
            <p>{home.agent.phone}</p>
            <p>{home.agent.email}</p>
        </section>
        </div>
        </>

    )
}