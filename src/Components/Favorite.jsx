import { useFavorites } from "../contexts/FavoritesContext"; // ✅ make sure path is correct
import { Link } from "react-router-dom"; // ✅ required for <Link>
import banner from "../img/banner.png"

export default function Favorite() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <p className="">Ingen favoritter endnu ❤️</p>;
  }

  return (
    <>
      <img className="full-width" src={banner} alt="banner" />
      <ul>
        {favorites.map(home => (
          <li className="favorites__li" key={home.id}>
              <figure className="favorites__figure">
            <Link to={`/list/${home.id}`}>
                <img src={home.images[0]?.formats?.thumbnail?.url} alt={home.name} />
            </Link>
              </figure>
              <div className="favorites__info" >
              <p>{home.adress1}</p>
              <p>{home.postalcode} {home.city}</p>
              <p>{home.type} Ejerudgift: {home.netto}</p>
              </div>
              <div  className="favorites__details">
                <p>{home.energylabel}</p>
                <p>{home.rooms} værelser</p>
                <p>{home.lotsize} m^2</p>
              </div>
              <div className="favorites__price"><p>{home.price} kr.</p></div>


              <button className="home__button favorites__button" onClick={(e) =>
                {e.preventDefault();
                  e.stopPropagation();
                  removeFavorite(home.id);}
              }>Fjern Fra Favoritter</button>


          </li>
        ))}
      </ul>
    </>
  );
}