import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { TextField, Button } from "@material-ui/core";
import "./styles.scss"

export function Login() {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    color: '', 
    terms: false
  })

  const updateData = e => 
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  const { firstName, email, password } = data;

  return(
    <div className="container login-page">
      <h1>Sign Up</h1>
      <TextField 
          label="First Name" 
          variant="outlined" 
          type="text" 
          name="name" 
          required 
          value={firstName}
          onChange={e=>updateData(e)}/>
      <TextField 
          variant="outlined" 
          label="E-Mail" 
          type="email" 
          name="email" 
          required 
          value={email}
          onChange={e=>updateData(e)}
        />
      <TextField 
          variant="outlined" 
          label="Password" 
          type="password" 
          name="password"
          required
          value={password}
          onChange={e=>updateData(e)}
        />
        <Link to="/more-info" state={{data}}  >
          <Button variant="outlined">Next</Button>
        </Link>
  </div>
  )
}

export default Login;
