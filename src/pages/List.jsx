import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { useAuth } from "../contexts/AuthContext";


export default function List() {
    const usrs = useLoaderData();
    const {token } = useAuth()

    console.log(token)

    return (

        <ul>
            {usrs.map(user => (
                <li key={user.id}>
                    <Link to={`/list/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
        
    )
}