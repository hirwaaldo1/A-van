import { Link } from "react-router-dom";
import { Form } from "react-router-dom/dist";

export default function Login() {
  return (
    <div className="login-container">
      <h1>
        Sign in to your account or can
        <Link to={"/signup"} className="link">
          sign up
        </Link>
      </h1>
      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
