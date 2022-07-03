import { useState } from "react";

export default function EditContent({ content }) {
  const [editContent, setEditContent] = useState(content);
  return (
    <div className="">
      <textarea
        type="text"
        placeholder=""
        value={editContent}
        className="input input-md bg-white max-w-3xl resize"
        onChange={(e) => setEditContent(e.target.value)}
      ></textarea>
    </div>
  );
}
