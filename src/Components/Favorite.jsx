import { useFavorites } from "../contexts/FavoritesContext"; // ✅ make sure path is correct
import { Link } from "react-router-dom"; // ✅ required for <Link>
import banner from "../img/banner.png"

export default function Favorite() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p className="">Ingen favoritter endnu ❤️</p>;
  }

  return (
    <>
      <img className="full-width" src={banner} alt="banner" />
      <ul>
        {favorites.map(home => (
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
  );
}