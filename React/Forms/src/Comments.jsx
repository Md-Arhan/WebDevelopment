import { useState } from "react";
import {useFormik} from "formik";

export default function ({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Required";
    } 

    // if (!values.lastName) {
    //   errors.lastName = "Required";
    // } else if (values.lastName.length > 20) {
    //   errors.lastName = "Must be 20 characters or less";
    // }

    // if (!values.email) {
    //   errors.email = "Required";
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = "Invalid email address";
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      addNewComment(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  // let [isValid, setisValid] = useState(true);

  // let handleInputChange = (e) => {
  //   setFormData((currData) => ({
  //     ...currData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // let handleSubmit = (e) => {
  //   if (!formData.username) {
  //     console.log("username is required");
  //     setisValid(false);
  //     e.preventDefault();
  //     return;
  //   }
  //   console.log(formData);
  //   addNewComment(formData);
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Give a Comment</h4>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          placeholder="username"
          type="text"
          name="username"
          id="username"
          // value={formData.username}
          // onChange={handleInputChange}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {/* {!isValid ? (
          <p style={{ color: "red" }}>username cannot be empty</p>
        ) : (
          ""
        )} */}
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="Remarks"
          // value={formData.remarks}
          // onChange={handleInputChange}
          onChange={formik.handleChange}
          value={formik.values.remarks}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="rating"
          min={1}
          max={5}
          // value={formData.rating}
          // onChange={handleInputChange}
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
