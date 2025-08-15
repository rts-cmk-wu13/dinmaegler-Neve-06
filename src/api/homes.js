
import queryClient from "../queryclient";
import { redirect } from "react-router";

export async function getHomes() {


  return queryClient.fetchQuery({
    queryKey: ['homes'],
    queryFn: async function () {
      const response = await fetch('https://dinmaegler.onrender.com/homes');
      if (!response.ok) {
        throw new Error('Den er helt gal');
      }
      return response.json();
    }
  });
}

export async function getHome({ params }) {
  console.log(params) // { id: '1' }
  return queryClient.fetchQuery({
    queryKey: ['home', params.id],
    queryFn: async function ({ queryKey })  {
      const [, id] = queryKey;
      console.log(id) // { id: '1' }
    const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`)
    console.log(response) 
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
        return response.json(); 
    }
  });
}

export async function fourHomes() {
    return queryClient.fetchQuery({
      queryKey: ['4homes'],
      queryFn: async function () {
        const response = await fetch('https://dinmaegler.onrender.com/homes?_limit=4&_start=2');
      if (!response.ok) {
        throw new Error('Den er helt gal');
      }
      return response.json();
      }
    })
}