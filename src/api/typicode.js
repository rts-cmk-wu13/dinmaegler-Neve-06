
import queryClient from "../queryclient";
import { redirect } from "react-router";

export async function getUsers() {

  const token = sessionStorage.getItem("token")

  if(!token) redirect("/login")

  return queryClient.fetchQuery({
    queryKey: ['users'],
    queryFn: async function () {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Den er helt gal');
      }
      return response.json();
    }
  });
}

export async function getUser({ params }) {
  console.log(params) // { id: '1' }
  return queryClient.fetchQuery({
    queryKey: ['user', params.id],
    queryFn: async function ({ queryKey })  {
      const [, id] = queryKey;
      console.log(id) // { id: '1' }
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(response) 
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
        return response.json(); 
    }
  });
}