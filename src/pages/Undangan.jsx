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









export default function Undangan() {
  return (
    <>
      <div className="bg-[url('/Image/7.png')] bg-cover">
        <VideoSection/>
        <Hero />
        <Mempelai />
        <Acara />
        <Nasehat />
        <Adab/>
        <Ucapan />
        <Penutupan/>
        <KadoDigital/>
      </div>
      <MusicPlayer/>
      <Navbar />
    </>
  );
}
