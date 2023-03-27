export default function Login() {
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
