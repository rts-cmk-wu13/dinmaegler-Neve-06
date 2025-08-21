import { MdMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { Link } from "react-router";

export default function HomepageAgents() {

  const {agents} = useLoaderData()

  return (
    <>
      <section className="no-columns">
        <h2>
          Mød vores engagerede medarbejdere
        </h2>
        <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
      </section>
      <section>
        {agents.map((agent) => (
          <div className="agent__container-home" key={agent.id}>
            <figure className="agent__figure">
              <img src={agent.image?.formats?.thumbnail?.url} alt={agent.name} />
            </figure>
            <h2>{agent.name}</h2>
            <p>{agent.title}</p>
            <MdMail />
            <FaLinkedinIn />
          </div>
        ))}
        <Link to="/agents" className="no-columns"><button className="home__button">Se alle Mælgere</button></Link>
      </section>
    </>
  )
}