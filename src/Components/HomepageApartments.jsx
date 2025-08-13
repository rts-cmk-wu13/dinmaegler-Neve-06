import { useEffect, useState } from "react"

export default function Boliger() {

  const [homes, setHomes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dinmaegler.onrender.com/homes?_limit=4&_start=2")
      .then((response) => {
        if (!response.ok) throw new Error("Network response not ok");
        return response.json();
      })
      .then((data) => setHomes(data))
      .catch((err) => {
        console.error(err);
        setError("Could not fetch homes.");
      });
  }, []);

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
      <button className="no-columns">se alle boliger</button>

      {error && <p className="text-red-500">{error}</p>}
    </section>
    </>
  );
  
}
