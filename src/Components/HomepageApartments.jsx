import { useEffect, useState } from "react"
import { useLoaderData, Link } from "react-router";

export default function HomepageApartments() {

  const {homes} = useLoaderData()

  return (
    <>
        <section className="chosen__title no-columns">
        <h1>Udvalgte Boliger</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available but
          the this in majority have suffered alteration in some
        </p>
      </section>
    <section> 
    {homes.map((home) => (
      <div className="chosen__card" key={home.id}>
        <figure className="chosen__figure">
        <img src={home.images[0]?.formats?.thumbnail?.url} alt={home.title}/>
        </figure>
          <h3>{home.adress1}</h3>
          <p>{home.postalcode}</p>
          <p>villa {home.cost} kr</p>
          <p>{home.rooms}</p>
          <p>{home.price}</p>
      </div>
    ))}
      <Link to="list" className="no-columns"><button>se alle boliger</button></Link>
    </section>
    </>
  );
  
}
