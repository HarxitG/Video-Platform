import Upload from "../components/Upload";
import VideoList from "../components/VideoList";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Video Moderation Dashboard
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Upload />
        <VideoList />
      </div>
    </div>
  );
}
