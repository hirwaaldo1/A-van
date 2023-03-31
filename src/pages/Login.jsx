import { Link } from "react-router-dom";
import { Form, useNavigation, useActionData } from "react-router-dom";
import { login } from "../services/api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const respond = await login(email, password);
  return respond;
}
export default function Login() {
  const navigation = useNavigation();
  const errorMessage = useActionData();

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
        {navigation.state === "idle" && errorMessage && (
          <h4 className="red">{errorMessage}</h4>
        )}
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
