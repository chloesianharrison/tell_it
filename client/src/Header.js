import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Header(){
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  }, [])

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }

  const name = userInfo?.name

  return(
    <header>
      <h1 className="logo">TellIt</h1>
      <nav>
          <Link to="/discover">Discover</Link>
          <Link to="/about">About Us</Link>
        {!name && (
          <>
            <Link to='/login'>Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        {name && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <a href='#' onClick={logout}>Logout</a>
          </>
        )}

      </nav>
    </header>
  );
}
