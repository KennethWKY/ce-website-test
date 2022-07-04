import { useRef } from "react";
import db from "../../Firebase";
import { doc, collection, getDoc, onSnapshot } from "firebase/firestore";

export default function SignUpForm() {
  const docSnap = getDoc(
    doc(db, "content", "957b96d8-7c1b-4309-991e-23184d20547d")
  );

  function test(e) {
    e.preventDefault();
    if (docSnap) {
      console.log("Document data:", docSnap);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const name = useRef();
  const email = useRef();
  const member = useRef();
  const refer = useRef();

  return (
    <div>
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md text-black">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  姓名 First and Last Name*
                </label>
                <input
                  ref={name}
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md invalid:border invalid:border-red-500"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700">
                  電郵 Email Address*
                </label>
                <input
                  ref={email}
                  type="email"
                  name="email-address"
                  id="email-address"
                  required
                  className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md invalid:border invalid:border-red-500"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  您目前是否參加錫安堂聚會? Are you currently attending Zion
                  Alliance Church? *
                </label>
                <select
                  ref={member}
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sminvalid:border invalid:border-red-500"
                >
                  <option>是Yes</option>
                  <option>否 No</option>
                </select>
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  如果您不是在錫安堂聚會，哪一位錫安堂的弟兄姐妹會和您一起上課？If
                  you're not attending Zion Alliance Church, who from Zion will
                  attend the class with you?
                </label>
                <input
                  ref={refer}
                  type="text"
                  className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              onClick={(e) => test(e)}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
