import { useNavigate } from "react-router-dom";

export default function BukaUndangan() {
  const navigate = useNavigate();

  return (
    <div className="w-52 h-10 bg-black flex justify-center items-center rounded-tr-[30px] rounded-bl-[30px]">
      <button
        onClick={() => navigate("/undangan")}
        className="font-libre font-light text-white"
      >
        Buka Undangan dong
      </button>
    </div>
  );
}
