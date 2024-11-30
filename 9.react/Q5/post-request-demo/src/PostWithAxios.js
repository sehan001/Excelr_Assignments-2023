// src/PostWithAxios.js
import React, { useState } from "react";
import axios from "axios";

const PostWithAxios = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("POST request successful:", response.data);
      // Handle successful response (e.g., display success message)
    } catch (error) {
      console.error("Error submitting post:", error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div>
      <h2>Submit a Post using Axios</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostWithAxios;
