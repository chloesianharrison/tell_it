import { useState } from "react";

export default function SignUp(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signup(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      body: JSON.stringify({name,email,password}),
      headers: {'Content-Type': 'application/json'},
    })
    if (response.status === 200) {
      alert('Registration successful');
    } else {
      alert('Registration failed')
    }
  }


  return(
    <div className="signup">
      <h1 className="white-title">Sign Up</h1>
      <form className="signup" onSubmit={signup}>
        <input type="text"
                placeholder="Name"
                value={name}
                onChange={ev => setName(ev.target.value)} />
        <input type="text"
                placeholder="Email"
                value={email}
                onChange={ev => setEmail(ev.target.value)} />
        <input type="text"
                placeholder="Password"
                value={password}
                onChange={ev =>
                setPassword(ev.target.value)}/>
        {/* <input type="text" placeholder="Confirm Password"/> */}
        <button className="submit-button">Sign Up</button>
      </form>
    </div>
  )
}
