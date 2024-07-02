export default function LoginPage(){
  return (
    <div className="login">
      <h1 className="white-title">Login</h1>
      <form className="login">
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button>Login</button>
      </form>
    </div>
  );
}
