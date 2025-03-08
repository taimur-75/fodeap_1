import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" })

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
    })

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials")
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
            <label htmlFor="name" className="htmlForm-label">Name</label>
            <input type="text" className="htmlForm-control" name="name" value={credentials.name} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
            <input type="email" className="htmlForm-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
            <input type="password" className="htmlForm-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLocation1" className="htmlForm-label">Location</label>
            <input type="text" className="htmlForm-control" name="location" value={credentials.geolocation} onChange={onChange} id="exampleInputLocation1" />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
          <Link to='/login' className='m-3 btn-danger btn'>Already a user</Link>
        </form>
      </div>
    </div>
  )
}

