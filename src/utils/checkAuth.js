import { redirect } from "react-router-dom";
import { auth } from "../config/database";

export default function checkAuth() {
  const isLoggedIn = auth.currentUser;
  if (!isLoggedIn) {
    throw redirect("/login?message=You must log in first please.");
  }
  return null;
}
