import BukaUndangan from "../Atom/Button-BukaUndangan";

const ImageFront = () => {
    return (
        <>
                <div className="relative bg-[url('/Image/bg1.svg')] bg-cover">
                <div className="w-full h-screen flex flex-col items-center">
                    <div
                    className="w-full  h-3/4 bg-cover mt-10 bounce-ball -translate-x-8"
                    style={{ backgroundImage: "url('/Image/Foto-Pengantin-Untuk-Depan.png')" }}
                    >
                    </div>
                    <div className="-mt-10 flex flex-col items-center z-10">
                        <h1 className="font-bold font-greatvibes text-3xl">M Yusuf Dan Zean Sahila</h1>
                        <span className="font-semibold font-libre text-xm text-center mt-5 pb-5">Kepada Bapak/Ibu/Saudara/i</span>
                        <BukaUndangan/>
                    </div>
                </div>

            {/* Decoration */}
            <div className="bg-[url('/Image/Bunga-center.png')] bg-cover w-40 h-40 absolute top-90 right-25"></div>

            </div>

        

         </>
    )
}

export default ImageFront;