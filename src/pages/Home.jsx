import { useEffect, useState } from "react";
import ImageFront from "../componet/Molecul/Image-Front";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768); // <=768px dianggap mobile
    };

    checkScreen(); // cek pertama kali
    window.addEventListener("resize", checkScreen); // cek saat resize

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <p className="text-xl text-gray-700 text-center px-4">
          Maaf, undangan digital ini hanya bisa dibuka di HP / smartphone 📲.
        </p>
      </div>
    );
  }

  return (
    <>
      <ImageFront />
    </>
  );
}
