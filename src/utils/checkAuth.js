import { redirect } from "react-router-dom";
import { auth } from "../config/database";
import { onAuthStateChanged } from "firebase/auth";

export default async function checkAuth() {
  let checkUserAuth = false;
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      return (checkUserAuth = true);
    }
    return (checkUserAuth = false);
  });
  if (!checkUserAuth) {
    throw redirect("/login?message=You must log in first please.");
  }
  return null;
}
