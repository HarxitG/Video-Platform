import { useState } from "react";
import api from "../api/axios";

export default function Upload({ refresh }) {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  const upload = async () => {
    if (!file) return;

    const form = new FormData();
    form.append("video", file);

    try {
      await api.post("/videos", form);
      setMsg("✅ Uploaded successfully");
      setFile(null);
      refresh();
    } catch {
      setMsg("❌ Upload failed");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      {msg && <p className="text-green-600">{msg}</p>}
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button
        className="bg-green-600 text-white px-4 py-2 ml-2 rounded"
        onClick={upload}
      >
        Upload
      </button>
    </div>
  );
}
