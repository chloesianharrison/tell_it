export default function SignUp(){
  return(
    <div className="signup">
      <h1 className="white-title">Sign Up</h1>
      <form className="signup">
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <input type="text" placeholder="Confirm Password"/>
        <button>Sign Up</button>
      </form>
    </div>
  )
}
