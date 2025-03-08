import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {

  const [credentials, setcredentials] = useState({email: "", password: ""})
  let navigate = useNavigate()
    const handlesubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      })
  
      const json = await response.json()
      console.log(json);
  
      if (!json.success) {
        alert("Enter valid credentials")
      }
      if(json.success){
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }
    }
    
    const onChange = (event) => {
      setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

  return (
    <div>
      <div className='container'>
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address : </label>
                  <input type="email" className="htmlForm-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password : </label>
                  <input type="password" className="htmlForm-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
              </form>
            </div>
    </div>
  )
}
