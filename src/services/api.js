import { collection, getDocs } from "firebase/firestore";
import db from "../config/database";
const vansCollection = collection(db, "vans");
export async function getVans(id) {
  const querySnapshot = await getDocs(vansCollection);
  if (id) {
    const vanById = querySnapshot.docs.find((doc) => doc.id === id);
    return vanById.data();
  }
  const dataArray = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  console.log("getVans", dataArray);
  return dataArray;
}

export async function getHostVans(id) {
  // const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  // const res = await fetch(url);
  // if (!res.ok) {
  //   throw {
  //     message: "Failed to fetch vans",
  //     statusText: res.statusText,
  //     status: res.status,
  //   };
  // }
  // const data = await res.json();
  return [];
}

export async function loginUser(creds) {
  // const res = await fetch("/api/login", {
  //   method: "post",
  //   body: JSON.stringify(creds),
  // });
  // const data = await res.json();

  // if (!res.ok) {
  //   throw {
  //     message: data.message,
  //     statusText: res.statusText,
  //     status: res.status,
  //   };
  // }

  return [];
}
