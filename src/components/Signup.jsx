// Import necessary React modules
import React, { useState } from 'react';

// Create the Signup component
const Signup = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
 // Function to handle form submission
const handleSubmit = async (e) => {
    // e.preventDefault();
  
    try {
      // Make a POST request to the backend endpoint with the form data
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the request was successful (status code 201)
      if (response.status === 201) {
        console.log('Signup successful!');
        // You can redirect the user or perform other actions upon successful signup
      } else {
        console.error('Signup failed');
        // Handle other cases, e.g., display an error message to the user
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle errors, e.g., display an error message to the user
    }
  };
  

  // JSX for the Signup component
  return (
    <div>
      <h1>Signup</h1>
      {/* <form > */}
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button onClick={()=>{handleSubmit()}} type="submit">Sign Up</button>
      {/* </form> */}
    </div>
  );
};

// Export the Signup component
export default Signup;
