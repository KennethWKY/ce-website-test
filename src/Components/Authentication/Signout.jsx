import { loginEmailPassword, logout } from "../../Firebase";

export default function Signout() {
  const handleSignout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <>
      <button
        className="hidden mt-3 w-full sm:inline-flex justify-center rounded-md shadow-sm px-4 py-2 border border-white text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={(e) => handleSignout(e)}
      >
        Signout
      </button>
      <button
        className="sm:hidden w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={(e) => handleSignout(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </button>
    </>
  );
}
