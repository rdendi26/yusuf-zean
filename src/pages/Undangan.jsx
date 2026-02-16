import { useEffect, useState } from "react";
import VideoSection from "../componet/Molecul/VideoSection";
import Acara from "../componet/Molecul/Acara";
import Hero from "../componet/Molecul/Hero";
import Mempelai from "../componet/Molecul/Mempelai";
import Nasehat from "../componet/Molecul/Nasehat";
import Adab from "../componet/Molecul/Adab";
import Ucapan from "../componet/Molecul/Section-Ucapan";
import Penutupan from "../componet/Molecul/Penutupan";
import KadoDigital from "../componet/Molecul/KadoDigital";
import Navbar from "../componet/Atom/Navbar";
import MusicPlayer from "../componet/Atom/MusicPlayer";
import Loader from "../componet/Atom/Loader";

export default function Undangan() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsReady(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* Loader */}
      {!isReady && <Loader />}

      {/* Konten tetap dirender tapi disembunyikan */}
      <div className={`${isReady ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <div className="bg-[#E9C688]">
          <VideoSection />
          <Hero />
          <Mempelai />
          <Acara />
          <Nasehat />
          <Adab />
          <Ucapan />
          <Penutupan />
          <KadoDigital />
        </div>

        <MusicPlayer />
        <Navbar />
      </div>
    </>
  );
}
