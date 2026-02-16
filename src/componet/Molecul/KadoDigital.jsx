import { useState } from "react";

export default function KadoDigital() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const banks = [
    {
      bank: "Bri",
      nama: "M.Yusup",
      no: "408401021046538",
       logo: "/Image/bri.svg",
    },
    {
      bank: "Dana",
      nama: "M.Yusup",
      no: "085798512487",
       logo: "/Image/dana.svg",
    },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="kado" className="w-full py-32 bg-linier-to-b from-[#f8f5f0] to-[#fffaf5] text-center font-libre bg-[#E9C688] bg-[url('/Image/a1.svg')] bg-cover  h-full">
      
      <h2 className="text-3xl md:text-4xl font-serif mb-4 mt-32">
        Kado Pernikahan
      </h2>

      <p className="text-gray-600 mb-14 px-6 max-w-2xl mx-auto">
        Doa restu Anda adalah hadiah terindah bagi kami.  
        Namun apabila ingin memberikan tanda kasih, dapat melalui transfer atau QRIS berikut:
      </p>

      {/* Rekening */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">

        {banks.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition duration-300 flex flex-col items-center"
          >
            <img
    src={item.logo}
    alt={item.bank}
    className="w-24 h-24 object-contain"
  />
  <h3 className="text-xl font-semibold">
    {item.bank}
  </h3>

            <div className="flex items-center justify-center gap-4">
              <p className="text-lg font-mono tracking-widest">
                {item.no}
              </p>

              <button
                onClick={() => handleCopy(item.no, index)}
                className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition"
              >
                {copiedIndex === index ? "Tersalin ✓" : "Salin"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* QRIS Section */}
      <div className="mt-20 px-6">
        <h3 className="text-2xl font-libre mb-6">
          Scan QRIS
        </h3>

        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm mx-auto">
          <img
            src="/Image/qris.jpeg"
            alt="QRIS"
            className="w-full object-contain"
          />

          <p className="text-gray-500 mt-4">
            Scan menggunakan aplikasi e-wallet atau mobile banking Anda
          </p>
        </div>
      </div>
    </section>
  );
}
