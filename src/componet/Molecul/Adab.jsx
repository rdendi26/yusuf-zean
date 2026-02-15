import { FiClock } from "react-icons/fi";
import { FaPrayingHands } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";

export default function AdabSection() {
  return (
    <section className="w-full py-16 bg-[#f8f6f2] text-center px-4 bg-[url('/Image/bg1.svg')] bg-cover  h-full">
      
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">
        Adab-Adab Menghadiri Walimah
      </h2>

      {/* Deskripsi */}
      <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base mb-8">
        Tanpa mengurangi rasa hormat, ada hal-hal dalam adab seorang muslim
        ketika menghadiri walimah yang harus diperhatikan :
      </p>

      {/* Ornamen */}
      <div className="flex justify-center mb-10">
        <div className="w-32 border-t border-gray-400 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-gray-500">
            ❤
          </span>
        </div>
      </div>

      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
        
        <AdabItem
          icon={<FiClock size={32} />}
          title="Memperhatikan Waktu Sholat"
        />

        <AdabItem
          icon={<FaPrayingHands size={32} />}
          title="Mendoakan Kedua Mempelai"
        />

        <AdabItem
          icon={<GiKnifeFork size={32} />}
          title="Memperhatikan Adab Makan dan Minum"
        />

        <AdabItem
          icon={<FaTshirt size={32} />}
          title="Memakai Pakaian Yang Sopan dan Menutup Aurat"
        />

      </div>
    </section>
  );
}

function AdabItem({ icon, title }) {
  return (
    <div className="bg-white p-6 shadow-sm hover:shadow-md transition rounded">
      <div className="flex justify-center text-gray-600 mb-4">
        {icon}
      </div>
      <p className="text-gray-700 text-sm leading-snug">
        {title}
      </p>
      <div className="mt-4 border-b border-gray-300 w-12 mx-auto"></div>
    </div>
  );
}
