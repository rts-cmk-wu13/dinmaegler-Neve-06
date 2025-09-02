import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { useLoaderData } from "react-router"
import { AiTwotonePicture } from "react-icons/ai";
import { FaLocationDot, FaHeart } from "react-icons/fa6";
import { IoLayersOutline } from "react-icons/io5";
import { useFavorites } from "../contexts/FavoritesContext"; // ✅ import


export default function Detail() {
    const home = useLoaderData(); // indlæs data fra loader funktion

    const { id } = useParams();
    const [getHome, setHome] = useState(null);
    const [error, setError] = useState(null);
    const { toggleFavorite, favorites } = useFavorites();
    useEffect(() => {
        fetch(`https://dinmaegler.onrender.com/homes/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response not ok");
                return res.json();
            })
            .then((data) => setHome(data))
            .catch((err) => setError("Could not fetch home details."));
    }, [id]);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!home) return <p>Loading...</p>;




    const isFavorited = favorites.includes(home.id);
    return (
        <>
            <img className="full-width" src={home.images[0]?.formats?.thumbnail?.url} alt={home.name} />
            <section className="home__info-top">
                <section>
                    <h2>{home.adress1}</h2>
                    <p>{home.city}</p>
                    <p>{home.postalcode}</p>
                </section>
                <section>
                    <AiTwotonePicture size={45} />
                    <IoLayersOutline size={45} />
                    <FaLocationDot size={45} />
                <button
  onClick={() => toggleFavorite(home)}
  className="col-start-8 size-12 "
>
  <FaHeart
    className={`size-12 col-start-8 ${isFavorited ? "text-red-500" : "text-gray-400"}`}
  />
</button>
                </section>
                <section>
                    <p>Kr. {home.price}</p>
                </section>
            </section>
            <div className="">
                <div className="home__info">
                    <p>Sagsnummer:{home.id}</p>
                    <p>Boligareal:{home.width}</p>
                    <p>Grundareal:{home.lotsize}</p>
                    <p>Rum/værelser:{home.rooms}</p>
                    <p>Antal Plan:{home.livingspace}</p>
                </div>
                <div className="home__info">
                    <p>Kælder:{home.basementsize}</p>
                    <p>Byggeår:{home.built}</p>
                    <p>Ombygget:{home.remodel}</p>
                    <p>Energimærke:{home.energylabel}</p>
                </div>
                <div className="home__info">

                    <p>udbetaing:{home.price}</p>
                    <p>Brutto ex ejerudgif:{home.gross}</p>
                    <p>Netto ex ejerudgift:{home.netto}</p>
                    <p>Ejerudgifter:{home.payment}</p>
                </div>
            </div>
            <div>
                <section className="description__container">
                    <h2>Beskrivelse</h2>
                    <p>{home.description}</p>
                </section>
                <section className="description__container">
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