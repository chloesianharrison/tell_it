import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header>
      <h1 className="logo">TellIt</h1>
      <nav>
          <Link to="/discover">Discover</Link>
          <Link to="/about">About Us</Link>
          <Link to='/login'>Login</Link>
          <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}
