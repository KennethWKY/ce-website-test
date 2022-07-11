import db from "../../Firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Content from "./Content";
import Nav from "./Nav";
import SignUpForm from "./SignUpForm";

export default function Cms({ user }) {
  // const [users, setUsers] = useState([]);
  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "users"), (snapshot) =>
  //       setUsers(snapshot.docs.map((doc) => doc.data()))
  //     ),
  //   []
  // );
  // const user_info = users.find((uid) => uid.id === user.uid);
  // console.log(user_info);

  return (
    <div>
      <Nav user={user} />
      <Content user={user} />
      {/* <SignUpForm /> */}
    </div>
  );
}
