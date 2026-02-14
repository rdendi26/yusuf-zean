import Acara from "../componet/Molecul/Acara";
import Hero from "../componet/Molecul/Hero";
import Mempelai from "../componet/Molecul/Mempelai";
import Nasehat from "../componet/Molecul/Nasehat";
import Ucapan from "../componet/Molecul/Section-Ucapan";
import Penutupan from "../componet/Molecul/Penutupan";
import Navbar from "../componet/Atom/Navbar";
import MusicPlayer from "../componet/Atom/MusicPlayer";








export default function Undangan() {
  return (
    <>
      <div className="bg-[url('/Image/bg2.png')] bg-cover pb-24">
        <Hero />
        <Mempelai />
        <Acara />
        <Nasehat />
        <Ucapan />
        <Penutupan/>
      </div>
      <MusicPlayer/>
      <Navbar />
    </>
  );
}
