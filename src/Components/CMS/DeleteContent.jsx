import { deleteCourse } from "../../Firebase";

export default function DeleteContent({ id }) {
  function deleteContent(id) {
    deleteCourse(id);
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => deleteContent(id)}
          className="mt-3 w-full inline-flex justify-center rounded-md border border-red-300 shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
