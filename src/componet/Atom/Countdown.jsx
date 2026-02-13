import { useEffect, useState, useCallback, useMemo } from "react";

export default function Countdown() {
  const targetDate = useMemo(
    () => new Date("2026-04-04T09:00:00"),
    []
  );

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex gap-3 justify-center">
      <TimeBox label="Hari" value={timeLeft.days} />
      <TimeBox label="Jam" value={timeLeft.hours} />
      <TimeBox label="Menit" value={timeLeft.minutes} />
      <TimeBox label="Detik" value={timeLeft.seconds} />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="w-10 h-14 bg-primary p-2 text-white flex flex-col justify-center items-center rounded-xl mt-20">
      <span className="text-xl font-bold">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[12px] ">{label}</span>
    </div>
  );
}
