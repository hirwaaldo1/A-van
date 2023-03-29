import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="login-container">
      <h1>
        Sign Up to to create an account or you can
        <Link to={"/login"} className="link">
          login
        </Link>
      </h1>
      <form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
