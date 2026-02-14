import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";


export default function BukaUndangan() {
  const navigate = useNavigate();

  return (
    <div className="w-54 h-10 bg-black flex justify-center items-center rounded-tr-[30px] rounded-bl-[30px]">
      <CiMail size={24} color="white"/>
      <button
        onClick={() => navigate("/undangan")}
        className="font-libre font-light text-white px-2"
      >
       Buka Undangan
      </button>
    </div>
  );
}
