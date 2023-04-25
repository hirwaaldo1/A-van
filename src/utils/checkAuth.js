import { redirect } from "react-router-dom";
import { auth } from "../config/database";
import { onAuthStateChanged } from "firebase/auth";

export default async function checkAuth(request) {
  const pathname = new URL(request.url).pathname;
  await onAuthStateChanged(auth, (user) => {
    if (user) return localStorage.setItem("user", user.uid + Math.random());
    localStorage.setItem("user", null);
  });
  if (localStorage.getItem("user") === "null")
    throw redirect(
      `/login?message=You must log in first please.&redirectTo=${pathname}`
    );

  return null;
}
