import db from "../../Firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ContentInfo from "./ContentInfo";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Content() {
  const [content, setContent] = useState([]);
  const [egContent, setEgContent] = useState([]);

  const auth = getAuth();
  const [user] = useAuthState(auth);

  useEffect(
    () =>
      onSnapshot(collection(db, "content"), (snapshot) =>
        setContent(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "egContent"), (snapshot) =>
        setEgContent(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  return (
    <div className="max-w-4xl m-auto my-10">
      <div className="border rounded-lg">
        {user.email === "kennethwong630@gmail.com"
          ? content.map((info) => (
              <div
                className="even:bg-gray-50 text-black sm:text-xl px-4 py-5 grid grid-cols-1"
                key={info.id}
              >
                <div className="flex justify-between">
                  <div>{info.title}</div>
                  <ContentInfo info={info} />
                </div>
              </div>
            ))
          : egContent.map((info) => (
              <div
                className="even:bg-gray-50 text-black sm:text-xl px-4 py-5 grid grid-cols-1"
                key={info.id}
              >
                <div className="flex justify-between">
                  <div>{info.title}</div>
                  <ContentInfo info={info} />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
