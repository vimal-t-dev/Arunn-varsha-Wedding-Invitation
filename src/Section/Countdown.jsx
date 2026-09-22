import { useEffect, useState } from "react";
import { motion } from "motion/react";

import countdownVideo from "../assets/Countdown.mp4";
import countdownBg from "../assets/Save-The-Date-bg.jpg";

function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-10-25T00:00:00");

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
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${countdownBg})`,
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-5 py-[3dvh] text-center">
        {/* Heading */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="shrink-0 text-[clamp(8px,1.5dvh,11px)] uppercase tracking-[0.35em] text-[#9a5c00]"
        >
          Counting Down To Our Forever
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-[2.5dvh] flex w-full shrink-0 gap-[1.5vw] rounded-[clamp(18px,3dvh,28px)] border border-[#c99b52] bg-[#fffaf0]/80 p-[1.5vw]"
        >
          <TimeBox value={timeLeft.days} label="Days" />

          <TimeBox value={timeLeft.hours} label="Hours" />

          <TimeBox value={timeLeft.minutes} label="Minutes" />

          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="mt-[3dvh] w-full min-h-0 flex-1 overflow-hidden rounded-[clamp(24px,4dvh,34px)]"
        >
          <video
            src={countdownVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="mt-[2.5dvh] shrink-0 font-serif text-[clamp(15px,2.3dvh,20px)] italic leading-relaxed text-[#6d1739]"
        >
          A beautiful moment before a beautiful forever.
        </motion.p>
      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[clamp(14px,2.5dvh,20px)] bg-[#591535] px-1 py-[2dvh] text-white shadow-md">
      <span className="font-serif text-[clamp(20px,4dvh,32px)] leading-none">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-[1.5dvh] text-[clamp(6px,1.2dvh,9px)] font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default Countdown;
