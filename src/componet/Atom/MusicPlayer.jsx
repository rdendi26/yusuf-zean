import { useEffect, useRef, useState } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

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
        className="fixed bottom-20 right-5 bg-slate-600 border-2 text-black p-4 rounded-full shadow-lg z-50"
      >
        {isPlaying ? <FaCirclePause size={20} color="black"/> : <FaCirclePlay size={20} color="black"/>}
      </button>
    </>
  );
};

export default MusicPlayer;
