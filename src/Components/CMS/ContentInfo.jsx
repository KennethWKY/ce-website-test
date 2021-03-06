/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import EditContent from "./EditContent";
import DeleteContent from "./DeleteContent";
import { updateTitle, updateLink } from "../../Firebase";

export default function ContentInfo({ info }) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const [editTitle, setEditTitle] = useState(false);
  const [titleChange, setTitleChange] = useState("");
  function update_title(id, titleChange) {
    titleChange === "" ? setEditTitle(false) : updateTitle(id, titleChange);
    setEditTitle(false);
  }

  const [editLink, setEditLink] = useState(false);
  const [linkChange, setlinkChange] = useState("");
  function update_Link(id, linkChange) {
    linkChange === "" ? setEditLink(false) : updateLink(id, linkChange);
    setEditLink(false);
  }

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left shadow-xl transform transition-all">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col justify-center max-w-5xl">
                    <div className="">
                      <div className="mt-3 sm:mt-0 sm:ml-4 flex flex-col gap-5">
                        <Dialog.Title
                          as="h1"
                          className="text-xl leading-6 text-gray-900 whitespace-pre-line mb-6 font-bold flex"
                        >
                          {editTitle ? (
                            <div className="flex">
                              <input
                                type="text"
                                defaultValue={info.title}
                                className="border w-fit"
                                onChange={(e) => setTitleChange(e.target.value)}
                              ></input>
                              <button
                                onClick={() =>
                                  update_title(info.id, titleChange)
                                }
                                className="inline-flex justify-center rounded-md shadow-sm bg-white font-medium text-green-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-0 ml-3 w-auto text-sm"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          ) : (
                            <div className="flex">
                              <div className="m-auto">{info.title}</div>
                              <button
                                onClick={() => setEditTitle(true)}
                                className="inline-flex justify-center rounded-md shadow-sm bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-0 ml-3 w-auto text-sm"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          )}
                        </Dialog.Title>

                        <p className="text-sm text-gray-500 whitespace-pre-line">
                          {info.descrt}
                        </p>

                        <a
                          href={info.signupForm}
                          className="w-fit inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-0 text-sm"
                        >
                          Sign up
                        </a>
                        <button
                          onClick={() => setEditLink(true)}
                          className="justify-start w-fit px-2 text-indigo-600"
                        >
                          Edit Link
                        </button>

                        {editLink ? (
                          <div className="flex w-auto">
                            <input
                              type="text"
                              defaultValue={info.signupForm}
                              className="border w-full"
                              onChange={(e) => setlinkChange(e.target.value)}
                            ></input>
                            <button
                              onClick={() => update_Link(info.id, linkChange)}
                              className="inline-flex justify-center rounded-md shadow-sm bg-white font-medium text-green-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-0 ml-3 w-auto text-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-5 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                      <EditContent
                        content={info.descrt}
                        title={info.title}
                        id={info.id}
                      />
                      <DeleteContent id={info.id} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
