import React, { useState} from "react";
import axios from "axios";


const initialState ={
  username: "",
  password: ""
}



const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [state, setState] = useState(initialState);


  const handleChange = e =>{
    setState({
      ...state, 
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/api/login", state)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
      })
      .catch(err => {
        console.log("Username or password was wrong", err.response)
      })
      props.history.push("/bubbles")
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input 
          id="username"
          name="username"
          type="text"
          placeholder="username"
          value={state.username}
          onChange={handleChange}

        />
        <label htmlFor="password">password</label>
        <input 
          id="password"
          name="password"
          type="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
