import React, { useState } from "react";
import "./PopUp.css";
import { Url } from "../types/types";

function PopUp({
  url,
  onEdit,
  onCLose,
}: {
  url: Url;
  onEdit: (editedUrl: string) => void;
  onCLose: () => void;
}) {
  const [editedUrl, setEditedUrl] = useState(url.full_url);

  return (
    <div className="popup-box">
      <button className="popup-close" onClick={onCLose}>
        &times;
      </button>
      <br></br>
      <input
        className="popup-input"
        value={editedUrl}
        onChange={(e) => setEditedUrl(e.target.value)}
      />
      <button className="popup-save" onClick={() => onEdit(editedUrl)}>
        save
      </button>
      <button className="popup-cancel" onClick={onCLose}>
        cancel
      </button>
    </div>
  );
}
export default PopUp;
