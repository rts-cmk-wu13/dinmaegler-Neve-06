


export async function favorites() {
    fetch("https://dinmaegler.onrender.com/users/6163ff832616683c883b049f", {
  "method": "PUT",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjNmZjgzMjYxNjY4M2M4ODNiMDQ5ZiIsImlhdCI6MTYzNTg0NDM2MywiZXhwIjoxNjM4NDM2MzYzfQ.w1VIG08a8IeHgLIEfgToxHIaJiA8tl2txjeQWq8H_gE"
  },
  "body": {
    "homes": [
      "61572ad4251a8a42ec8cb544"
    ]
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
}