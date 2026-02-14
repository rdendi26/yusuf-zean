

import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } 
from "firebase/firestore";

import { db } from "../../firebase";



export default function Ucapan() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [status, setStatus] = useState("hadir");

  const [ucapanList, setUcapanList] = useState([]);

useEffect(() => {
  const q = query(
    collection(db, "wishes"),
    orderBy("createdAt", "desc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setUcapanList(data);
  });

  return () => unsubscribe();
}, []);


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!nama || !pesan) return;

  await addDoc(collection(db, "wishes"), {
    nama: nama,
    pesan: pesan,
    status: status,
    createdAt: serverTimestamp()
  });

  setNama("");
  setPesan("");
  setStatus("hadir");
};


  const hadirCount = ucapanList.filter(u => u.status === "hadir").length;
  const tidakHadirCount = ucapanList.filter(u => u.status === "tidak").length;

  const formatDate = (timestamp) => {
  if (!timestamp) return "";

  const date = timestamp.toDate(); // convert Firestore Timestamp
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};


  return (
    <section id="ucapan" className="max-w-md mx-auto p-4 bg-[#f8f6f1] rounded-xl bg-[url('/Image/5.svg')] bg-cover bg-center">
      <div className="p-5">
        <h1 className="font-greatvibes text-3xl font-bold text-center pb-10">Berikan Ucapan</h1>
        <p className="font-thin font-libre text-[12px] text-center">Silahkan memberikan sedikit pesan dan ucapan kepada kami, barakallahu fikum.</p>
      </div>
      {/* Header */}
      <h2 className="text-center text-xl font-semibold mb-4">
        {ucapanList.length} Ucapan
      </h2>

      {/* Counter */}
      <div className="flex gap-3 justify-center mb-6">
        <CounterBox color="bg-green-600" label="Hadir" value={hadirCount} />
        <CounterBox color="bg-red-600" label="Tidak hadir" value={tidakHadirCount} />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full border rounded-lg p-2"
        />

        <textarea
          placeholder="Ucapan"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          className="w-full border rounded-lg p-2"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="hadir">Hadir</option>
          <option value="tidak">Tidak Hadir</option>
        </select>

        <button
          type="submit"
          className="bg-[#8b6f47] text-white px-6 py-2 rounded-lg"
        >
          Kirim
        </button>
      </form>

      {/* List Ucapan */}
      <div className="mt-6 max-h-96 overflow-y-auto space-y-4 pr-2">
  {ucapanList.slice(0, 5).map((item) => (
    <div
  key={item.id}
  className="bg-white p-3 rounded-lg shadow"
>
  <div className="flex justify-between items-center">
    <p className="font-semibold">{item.nama}</p>
    <span
      className={`text-xs px-2 py-1 rounded ${
        item.status === "hadir"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {item.status === "hadir" ? "Hadir" : "Tidak Hadir"}
    </span>
  </div>
  <p className="mt-2 text-sm">{item.pesan}</p>

  {/* Waktu */}
  <p className="text-xs text-gray-400 mt-1">
    {formatDate(item.createdAt)}
  </p>

</div>

  ))}
</div>

  <div className="p-5 pt-10">
        <p className="font-thin font-libre text-[12px] text-center">Terimakasih atas do'a dan kehadiaran Bapak, Ibu dan Saudara/I sekalian Doakan kami agar menjadi pasangan yang sakinah, mawadah, warahmah, dalam anugrah ridha Allah. Semoga pertemuan ini menjadi awal yang tak berkesudahan, Sampaijumpa di hari bahagia kami.</p>
      </div>
    </section>
  );
}

function CounterBox({ color, label, value }) {
  return (
    <div className={`${color} text-white w-28 h-20 rounded-xl flex flex-col justify-center items-center`}>
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
