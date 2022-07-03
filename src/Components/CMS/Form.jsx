import { collection, setDoc, doc } from "firebase/firestore";
import db from "../../Firebase";
import { v4 as uuidv4 } from "uuid";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Form() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const input_title = useRef();
  const input_descr = useRef();

  function submitForm(e) {
    e.preventDefault();
    const title = input_title.current.value;
    const descrt = input_descr.current.value;
    const id = uuidv4();
    const info = { title: title, descrt: descrt, id: id };
    setDoc(doc(db, "content", id), info);
  }

  return (
    <>
      <div className="relative">
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setOpen(true)}
          ref={cancelButtonRef}
        >
          Add Content
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
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl sm:w-full">
                  <div className="">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                          <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                              <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                  <label
                                    htmlFor="company-website"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <input
                                      type="text"
                                      name="company-website"
                                      id="company-website"
                                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                      placeholder="..."
                                      ref={input_title}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="about"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  About
                                </label>
                                <div className="mt-1">
                                  <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="..."
                                    defaultValue={""}
                                    ref={input_descr}
                                  />
                                </div>
                              </div>

                              <button onClick={(e) => submitForm(e)}>
                                submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
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
