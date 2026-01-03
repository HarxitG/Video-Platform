export default function processVideo(video) {
  setTimeout(async () => {
    video.status = Math.random() > 0.5 ? "safe" : "flagged";
    await video.save();
  }, 4000);
}
