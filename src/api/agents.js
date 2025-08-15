
import queryClient from "../queryclient";
import { redirect } from "react-router";

export async function getAgents() {


  return queryClient.fetchQuery({
    queryKey: ['agents'],
    queryFn: async function () {
      const response = await fetch('https://dinmaegler.onrender.com/agents');
      if (!response.ok) {
        throw new Error('Den er helt gal');
      }
      return response.json();
    }
  });

  
  
}

export async function getAgent({ params }) {
    console.log(params) // { id: '1' }
    return queryClient.fetchQuery({
        queryKey: ['agent', params.id],
        queryFn: async function ({ queryKey })  {
            const [, id] = queryKey;
            console.log(id) // { id: '1' }
            const response = await fetch(`https://dinmaegler.onrender.com/agents/${id}`)
            console.log(response) 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
                    return response.json(); 
    }
  });

}
export async function threeAgents() {
     return queryClient.fetchQuery({
      queryKey: ['3agents'],
      queryFn: async function () {
        const response = await fetch('https://dinmaegler.onrender.com/agents?_limit=3');
      if (!response.ok) {
        throw new Error('Den er helt gal');
      }
      return response.json();
      }
    })
}