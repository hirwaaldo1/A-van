import { collection, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from "../config/database";
import { redirect } from "react-router-dom/dist";
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
    let respond = await createUserWithEmailAndPassword(auth, email, password);
    console.log(respond, "respond");
    return redirect("/host");
  } catch (error) {
    return error.message;
  }
}
