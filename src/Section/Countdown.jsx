import { useEffect, useState } from "react";
import { motion } from "motion/react";

import countdownVideo from "../assets/Countdown.mp4";
import countdownBg from "../assets/Save-The-Date-bg.jpg";

function Countdown() {
  const calculateTimeLeft = () => {
    // Marriage date
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

  // Update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center px-5 py-20"
      style={{
        backgroundImage: `url(${countdownBg})`,
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center text-center">
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
          className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[#9a5c00]"
        >
          Counting Down To Our Forever
        </motion.p>

        {/* Countdown boxes */}

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
          className="mt-6 flex w-full max-w-[290px] gap-2 rounded-[24px] border border-[#c99b52] bg-[#fffaf0]/80 p-2"
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
          className="mt-7 w-full overflow-hidden rounded-[32px]"
        >
          <video
            src={countdownVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-[430px] w-full object-cover"
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
          className="mt-6 font-serif text-lg italic text-[#6d1739]"
        >
          A beautiful moment before a beautiful forever.
        </motion.p>
      </div>
    </section>
  );
}

/* Countdown box */

function TimeBox({ value, label }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[18px] bg-[#591535] px-1 py-4 text-white shadow-md">
      <span className="font-serif text-2xl leading-none">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-3 text-[7px] font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default Countdown;
