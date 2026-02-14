const VideoSection = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-[320px] aspect-[9/16]">
        <video
          src="/video/prewedding.MP4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default VideoSection;
