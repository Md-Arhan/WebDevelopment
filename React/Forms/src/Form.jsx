import { use, useState } from "react";

export function Form() {
  // let [fullName, setFullName] = useState("");
  // let [username, setuserName] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password : ""
  });

  // let handleNameCange= (e) =>{
  //     console.log(e);
  //     setFullName(e.target.value)  //not dependent on previous value we can wrote normally
  // }

  // let handleNameUserChange = (e) =>{
  //     console.log(e.target);
  //     setuserName(e.target.value)  //not dependent on previous value we can wrote normally
  // }

  let handleInputChange = (e) => {
    let fieldName = e.target.name;
    let newValue = e.target.value;
    console.log(fieldName);
    console.log(newValue);

    setFormData((currData) => {
    //   currData[fieldName] = newValue;
    //   return { ...currData };
       return {...currData, [e.target.name] : e.target.value}
    });
  };

  //Computed Property Name : You're not giving the actual property name directly — instead, you're giving a variable or expression, and its evaluated value becomes the actual property key.
  /*const actualKey = "username";
   const user = {
   [actualKey]: "JohnDoe"
   };
 */

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      username: "",
      password : ""
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="username">Full Name</label>
      <input
        type="text"
        name="fullName"
        id="username"
        placeholder="Enter Your full name"
        value={formData.fullName}
        onChange={handleInputChange}
      />

      <label htmlFor="username1">Enter User Name</label>
      <input
        type="text"
        name="username"
        id="username1"
        placeholder="Enter user name"
        value={formData.username}
        onChange={handleInputChange}
      />

      <label htmlFor="password">Enter User Name</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
}
