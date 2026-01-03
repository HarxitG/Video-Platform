import { useState } from "react";
import api from "../api/axios";

export default function Upload() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) return alert("Select a video");

    const form = new FormData();
    form.append("video", file);

    await api.post("/videos/upload", form);
    alert("Uploaded successfully");
    window.location.reload();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-3">Upload Video</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button
        onClick={upload}
        className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}
