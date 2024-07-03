import { useContext, useState } from "react";
import {Navigate} from 'react-router-dom';
import { UserContext } from "../UserContext";

export default function LoginPage(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext)
  async function login(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    })

    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        setRedirect(true);
      })
    } else {
      alert('wrong credentials')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="login">
      <h1 className="white-title">Login</h1>
      <form className="login" onSubmit={login}>
        <input type="text"
        placeholder="Name"
        value={name}
        onChange={ev => setName(ev.target.value)}/>
        <input type="text"
        placeholder="Email"
        value={email}
        onChange={ev => setEmail(ev.target.value)}/>
        <input type="text"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  );
}
