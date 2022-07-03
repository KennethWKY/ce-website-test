import db from "../Firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { DeleteDoc } from "../Firebase";
import EditContent from "./CMS/EditContent";
import Form from "./CMS/Form.jsx";
import ContentInfo from "./CMS/ContentInfo";

export default function Content() {
  const [content, setContent] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "content"), (snapshot) =>
        setContent(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  return (
    <div className="max-w-4xl m-auto my-10">
      <Form />

      <div className="border rounded-lg">
        {content.map((info) => (
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
