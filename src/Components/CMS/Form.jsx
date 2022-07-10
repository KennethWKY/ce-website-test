import { collection, setDoc, doc } from "firebase/firestore";
import db from "../../Firebase";
import { v4 as uuidv4 } from "uuid";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Form() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const input_title = useRef();
  const input_descr = useRef();
  const input_signupForm = useRef();

  function submitForm(e) {
    e.preventDefault();
    const title = input_title.current.value;
    const descrt = input_descr.current.value;
    const signupForm = input_signupForm.current.value;
    const id = uuidv4();
    const info = {
      title: title,
      descrt: descrt,
      id: id,
      signupForm: signupForm,
      signup: [],
    };
    setDoc(doc(db, "content", id), info);
    setOpen(false);
  }

  return (
    <>
      <div className="relative">
        <button
          type="button"
          className="hidden mt-3 w-full sm:inline-flex justify-center rounded-md shadow-sm px-4 py-2 border border-white text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setOpen(true)}
          ref={cancelButtonRef}
        >
          Add Content
        </button>
        <button
          type="button"
          className="sm:hidden w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setOpen(true)}
          ref={cancelButtonRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

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
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-3xl w-full">
                  <div className="">
                    <form action="#" method="POST">
                      <div className="sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                          <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 sm:text-lg">
                                Title
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                  type="text"
                                  className="focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 flex-1 block w-full rounded-none rounded-r-md sm:text-md border-gray-300"
                                  placeholder=""
                                  ref={input_title}
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium text-gray-700 sm:text-lg"
                            >
                              About
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                className="text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border border-gray-300 rounded-md"
                                placeholder=""
                                defaultValue={""}
                                ref={input_descr}
                              />
                            </div>
                          </div>

                          <div className="col-span-3 sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 sm:text-lg">
                              Sign-up Form Link
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                type="text"
                                className="focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 flex-1 block w-full rounded-none rounded-r-md sm:text-md border-gray-300"
                                placeholder=""
                                ref={input_signupForm}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="m-5 flex justify-end gap-5 sm:gap-0">
                      <button
                        onClick={(e) => submitForm(e)}
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        submit
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
