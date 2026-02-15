import Countdown from "../Atom/Countdown";
import Button from "../Atom/Button";

const Acara = () => {
    return (

        <>
        <section id="acara" className=" w-full h-full py-20 bg-[url('/Image/bg1.svg')] bg-cover bg-center">  
        <h1 className="font-greatvibes font-bold text-3xl text-center">Menuju Hari Yang Dituju</h1>
        <Countdown/>
        <div>
            <p className="text-[12px] text-center mt-10 p-10 font-libre">Dengan Memohon Rahmat Dan Ridho Allah.Swt, Kami Mengundang Bapak/Ibu/Saudara/I Untuk menghadiri Acara Pernikahan kami pada :</p>
        </div>
        <div className="flex flex-col items-center gap-8">
            <h1 className="font-greatvibes font-bold text-3xl text-center">~Akad Nikah~</h1>
            <Button>08.00 WIB - Selesai</Button>
            <h1 className="font-greatvibes font-bold text-3xl text-center">~Resepsi~</h1>
            <Button>Sabtu, 04 April 2026</Button>
            <Button>Pukul: 10.00 WIB - Selesai</Button>
            
            <div className="flex flex-col items-center">
  
  {/* Google Maps */}
  <div className="w-full max-w-md h-56 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.187663572214!2d107.85714447414429!3d-7.104237369654079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b7f1dc3dc3b3%3A0x7f5c8a3a6abeef95!2syayasan%20Al%20Mahalli%20Ponpes%20Tarbiyatul%20Aulad!5e0!3m2!1sen!2sid!4v1770949337059!5m2!1sen!2sid"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Lokasi Pp.Tarbiatul Aulad"
    ></iframe>
  </div>

  <h1 className="font-bold font-greatvibes text-2xl text-center mt-5">
    Pp.Tarbiatul Aulad
  </h1>

  <span className="text-[16px] font-greatvibes font-bold py-2 text-center">
    Tambakbaya - Dano - Leles - Garut
  </span>

  {/* CTA Button */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Pp.Tarbiatul+Aulad+Tambakbaya+Dano+Leles+Garut"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button>📍 Lihat Lokasi</Button>
  </a>

</div>


            </div>
        </section>
        
        
        </>
    )
}

export default Acara;