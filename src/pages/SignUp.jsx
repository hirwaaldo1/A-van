import { Link } from "react-router-dom";
import { Form, useActionData, useNavigation } from "react-router-dom/dist";
import { signup } from "../services/api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password, "password");
  const loginUser = await signup(email, password);
  return loginUser;
}
export default function SignUp() {
  const navigation = useNavigation();
  const errorMessage = useActionData();
  return (
    <div className="login-container">
      <h1>
        Sign Up to to create an account or you can
        <Link to={"/login"} className="link">
          login
        </Link>
      </h1>
      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        {errorMessage && <h4 className="red">{errorMessage}</h4>}
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "wait ..." : "Submit"}
        </button>
      </Form>
    </div>
  );
}
