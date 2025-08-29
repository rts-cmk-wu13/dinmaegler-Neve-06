import { useLoaderData } from "react-router"
import Favorite from '../Components/Favorite';


export default function Favorites() {
 
  const favorites = useLoaderData();
    return  (
        <>
 
      <section>
        <Favorite />
      </section>
    
        </>

    )
}