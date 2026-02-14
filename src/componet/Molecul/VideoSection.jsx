const VideoSection = () => {
    return (
        <div className="relative w-[320px] aspect-9/16 overflow-hidden rounded-2xl shadow-xl">
  <video
    src="../videos/prewedding.MP4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover pointer-events-none"
  />
</div>

    )
}

export default VideoSection;