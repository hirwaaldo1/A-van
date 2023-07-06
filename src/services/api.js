import { collection, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import db, { auth } from "../config/database";
import { redirect } from "react-router-dom";
const vansCollection = collection(db, "vans");
export async function getVans() {
  const querySnapshot = await getDocs(vansCollection);
  const dataArray = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return dataArray;
}
export async function getVan(id) {
  const querySnapshot = await getDocs(vansCollection);
  const dataArray = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return dataArray.find((van) => van.id == id);
}

export async function signup(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return redirect("/host");
  } catch (error) {
    return error.message;
  }
}

export async function login(email, password, pathname) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return redirect(pathname);
  } catch (error) {
    return error.message;
  }
}

export async function logout(navigate) {
  try {
    await auth.signOut();
    return navigate("/");
  } catch (error) {
    return error.message;
  }
}
