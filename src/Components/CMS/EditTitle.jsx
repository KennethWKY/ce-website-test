import { updateTitle } from "../../Firebase";
import { useState } from "react";

export default function EditTitle({ title, id }) {
  const [editTitle, setEditTitle] = useState(title);
  function update() {
    updateTitle(id, editTitle);
  }

  return (
    <div>
      <button>Edit</button>
      <input
        type="text"
        defaultValue={editTitle}
        className="border"
        onChange={(e) => setEditTitle(e.target.value)}
      ></input>
      <button onClick={() => update()}>Save Change</button>
    </div>
  );
}
