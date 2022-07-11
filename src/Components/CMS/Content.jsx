import db from "../../Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ContentInfo from "./ContentInfo";

export default function Content({ user }) {
  const [content, setContent] = useState([]);
  const [egContent, setEgContent] = useState([]);

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
