const VideoSection = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-whiten bg-[url('/Image/a1.svg')] bg-cover relative">
      <div className="w-4/5 aspect-auto">
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
