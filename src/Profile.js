import React, { useState } from "react";

export default function EditProfile() {


  return (
    <form>
      <label> First Name: </label>
      <input type="text" placeholder="First Name:" /> <br />
      <label> Last Name: </label>
      <input type="text" placeholder="Last Name:" /> <br />
      <label> D.O.B: </label>
      <input type="date" placeholder="D.O.B:" /> <br />
      <label> Password: </label>
      <input type="password" placeholder="Password:" /> <br />

      <button>Submit</button>
    </form>
  )
}

// const [menu, setMenu] = useState(null);

// useEffect(() => {
//   get('/menu').then((response) => {
//     setMenu(response.data);
//   });
// }, []);

// useEffect( () => {
//   get('/menu').then( (response) => { setMenu(response.data)});
// }, []);