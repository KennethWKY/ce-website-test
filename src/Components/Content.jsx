import db from "../Firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { DeleteDoc } from "../Firebase";

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
    <div>
      {content.map((info) => (
        <div key={info.id}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{info.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <div>Title:</div> <div>{info.title}</div>
                  <div>Description: </div>{" "}
                  <div className="whitespace-pre">{info.descrt}</div>
                  <button onClick={() => DeleteDoc(info.id)}>Delete Doc</button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
