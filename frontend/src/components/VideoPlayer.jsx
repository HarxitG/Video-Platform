export default function VideoPlayer({ id }) {
  return (
    <video
      className="w-full rounded"
      controls
      src={`http://localhost:5000/videos/stream/${id}`}
    />
  );
}
