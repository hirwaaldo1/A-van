import { collection, getDocs } from "firebase/firestore";
import db from "../config/database";
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
