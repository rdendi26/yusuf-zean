import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto play saat halaman load
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="../music/zaujati.mp3"
        loop
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-20 right-5 bg-amber-700 text-white p-4 rounded-full shadow-lg z-50"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </>
  );
};

export default MusicPlayer;
