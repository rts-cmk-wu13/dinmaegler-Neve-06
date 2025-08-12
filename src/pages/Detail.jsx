    import { useLoaderData } from "react-router"

export default function Detail() {
    const user = useLoaderData(); // indlæs data fra loader funktion

    return  (
        <>
        <p>user details</p>
        <h2>{user.name}</h2>
        </>

    )
}