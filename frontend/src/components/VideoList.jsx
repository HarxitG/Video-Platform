import { useEffect, useState } from "react";
import api from "../api/axios";
import VideoPlayer from "./VideoPlayer";

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("/videos").then(res => setVideos(res.data));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-3">Uploaded Videos</h2>

      {videos.map(v => (
        <div key={v._id} className="mb-4">
          <p className="text-sm mb-1">
            Status: <b>{v.status}</b>
          </p>

          {v.status !== "processing" && (
            <VideoPlayer id={v._id} />
          )}
        </div>
      ))}
    </div>
  );
}
