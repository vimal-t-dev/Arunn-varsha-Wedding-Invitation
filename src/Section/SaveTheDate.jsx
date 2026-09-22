import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "motion/react";

import saveTheDateBg from "../assets/Save-The-Date-bg.jpg";

function SaveTheDate() {
  const canvasRef = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [showHeartBurst, setShowHeartBurst] = useState(false);

  // ==========================================
  // HEART PARTICLES
  // ==========================================

  const heartParticles = useMemo(() => {
    return Array.from({ length: 55 }, (_, index) => ({
      id: index,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      size: Math.random() * 10 + 10,
      rotation: Math.random() * 720 - 360,
      delay: Math.random() * 0.15,
      duration: Math.random() * 1.2 + 1.2,
    }));
  }, []);

  // ==========================================
  // CREATE SCRATCH LAYER
  // ==========================================

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scratch card background
      ctx.fillStyle = "#a64054";
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Soft center glow
      const gradient = ctx.createRadialGradient(
        rect.width / 2,
        rect.height / 2,
        10,
        rect.width / 2,
        rect.height / 2,
        rect.width * 0.7,
      );

      gradient.addColorStop(0, "rgba(255, 220, 170, 0.18)");

      gradient.addColorStop(1, "rgba(120, 20, 50, 0.08)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // ==========================================
      // HEART FUNCTION
      // ==========================================

      const drawHeart = (x, y, size, color, filled = true) => {
        const topCurveHeight = size * 0.3;

        ctx.beginPath();

        ctx.moveTo(x, y + topCurveHeight);

        ctx.bezierCurveTo(
          x - size * 0.5,
          y - size * 0.1,
          x - size * 0.55,
          y + size * 0.55,
          x,
          y + size,
        );

        ctx.bezierCurveTo(
          x + size * 0.55,
          y + size * 0.55,
          x + size * 0.5,
          y - size * 0.1,
          x,
          y + topCurveHeight,
        );

        if (filled) {
          ctx.fillStyle = color;
          ctx.fill();
        } else {
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      };

      // ==========================================
      // DECORATIVE HEARTS
      // ==========================================

      const hearts = [
        [28, 25, 10, true],
        [75, 18, 7, false],
        [120, 30, 11, true],
        [165, 17, 7, false],
        [215, 28, 10, true],
        [265, 18, 7, false],

        [18, 72, 7, false],
        [52, 90, 13, true],
        [100, 70, 8, true],
        [145, 92, 7, false],
        [195, 70, 12, true],
        [245, 88, 8, false],
        [282, 65, 12, true],

        [30, 125, 10, true],
        [75, 140, 7, false],
        [118, 120, 11, true],
        [165, 145, 8, false],
        [215, 125, 13, true],
        [260, 145, 7, false],

        [18, 175, 7, false],
        [58, 195, 12, true],
        [105, 175, 8, false],
        [145, 205, 12, true],
        [190, 180, 7, false],
        [235, 200, 11, true],
        [280, 175, 7, false],

        [30, 225, 12, true],
        [80, 245, 7, false],
        [125, 225, 10, true],
        [170, 250, 7, false],
        [215, 230, 12, true],
        [260, 245, 7, false],
        [292, 220, 10, true],
      ];

      hearts.forEach(([x, y, size, filled]) => {
        if (x < rect.width && y < rect.height) {
          drawHeart(
            x,
            y,
            size,
            filled ? "rgba(255, 220, 150, 0.9)" : "rgba(255, 230, 180, 0.95)",
            filled,
          );
        }
      });

      // ==========================================
      // CENTER HEART
      // ==========================================

      const centerX = rect.width / 2;
      const centerY = rect.height / 2 + 5;

      ctx.shadowColor = "rgba(255, 220, 160, 0.6)";

      ctx.shadowBlur = 15;

      drawHeart(centerX, centerY - 18, 32, "#f7d78d", true);

      ctx.shadowBlur = 0;

      // ==========================================
      // SPARKLES
      // ==========================================

      ctx.fillStyle = "rgba(255, 235, 190, 0.9)";

      const sparkles = [
        [centerX - 48, centerY - 25],
        [centerX + 50, centerY - 15],
        [centerX - 38, centerY + 25],
        [centerX + 42, centerY + 32],
      ];

      sparkles.forEach(([x, y]) => {
        ctx.beginPath();

        ctx.arc(x, y, 2, 0, Math.PI * 2);

        ctx.fill();
      });
    };

    const timer = setTimeout(resizeCanvas, 100);

    window.addEventListener("resize", resizeCanvas);

    window.addEventListener("orientationchange", resizeCanvas);

    return () => {
      clearTimeout(timer);

      window.removeEventListener("resize", resizeCanvas);

      window.removeEventListener("orientationchange", resizeCanvas);
    };
  }, []);

  // ==========================================
  // CHECK SCRATCH %
  // ==========================================

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;

    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const pixels = imageData.data;

    let transparentPixels = 0;
    let totalPixels = 0;

    const step = 10;

    for (let y = 0; y < canvas.height; y += step) {
      for (let x = 0; x < canvas.width; x += step) {
        const index = (y * canvas.width + x) * 4;

        const alpha = pixels[index + 3];

        totalPixels++;

        if (alpha < 100) {
          transparentPixels++;
        }
      }
    }

    const scratchedPercentage = (transparentPixels / totalPixels) * 100;

    if (scratchedPercentage >= 25) {
      revealCard();
    }
  };

  // ==========================================
  // REVEAL CARD
  // ==========================================

  const revealCard = () => {
    const canvas = canvasRef.current;

    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    setRevealed(true);
    setIsScratching(false);
    setShowHeartBurst(true);

    setTimeout(() => {
      setShowHeartBurst(false);
    }, 2800);
  };

  // ==========================================
  // SCRATCH
  // ==========================================

  const scratch = (event) => {
    if (revealed) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (event.touches) {
      const touch = event.touches[0];

      if (!touch) return;

      clientX = touch.clientX;
      clientY = touch.clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    const x = ((clientX - rect.left) / rect.width) * canvas.width;

    const y = ((clientY - rect.top) / rect.height) * canvas.height;

    const ctx = canvas.getContext("2d");

    const scaleX = canvas.width / rect.width;

    const scaleY = canvas.height / rect.height;

    ctx.save();

    ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();

    ctx.arc(clientX - rect.left, clientY - rect.top, 24, 0, Math.PI * 2);

    ctx.fill();

    ctx.restore();

    checkScratchPercentage();
  };

  // ==========================================
  // CALENDAR
  // ==========================================

  const addToCalendar = () => {
    const event = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Arunn & Varsha Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",

      "BEGIN:VEVENT",

      "UID:arunn-varsha-wedding-2026@wedding",

      "DTSTAMP:20260922T000000Z",

      "DTSTART;TZID=Asia/Kolkata:20261025T060000",

      "DTEND;TZID=Asia/Kolkata:20261025T080000",

      "SUMMARY:Arunn & Varsha Wedding",

      "DESCRIPTION:Wedding Muhurtham of Arunn & Varsha.",

      "LOCATION:BALANJIKA MAHAL, PERUMAL KOVIL, KUNNATHURPUDUR",

      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      "DESCRIPTION:Tomorrow is Arunn & Varsha's Wedding!",
      "END:VALARM",

      "END:VEVENT",

      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([event], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "Arunn-Varsha-Wedding.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${saveTheDateBg})`,
      }}
    >
      {/* ================================= */}
      {/* HEART BURST */}
      {/* ================================= */}

      {showHeartBurst && (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
          {heartParticles.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                x: `${heart.x}vw`,
                y: `${heart.y}vh`,
                scale: [0, 1.2, 1, 0.8],
                opacity: [1, 1, 0.9, 0],
                rotate: heart.rotation,
              }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2"
              style={{
                fontSize: `${heart.size}px`,
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      {/* Background */}
      <div className="absolute inset-0 bg-white/50" />

      {/* ================================= */}
      {/* MAIN CONTENT */}
      {/* ================================= */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-5 py-[2dvh] text-center">
        {/* HEADING */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shrink-0 text-[clamp(7px,1.3dvh,10px)] uppercase tracking-[0.35em] text-[#7d173c]"
        >
          Mark Your Heart
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-[0.8dvh] shrink-0 font-serif text-[clamp(30px,5dvh,42px)] leading-none text-[#7d173c]"
        >
          SAVE
          <span className="mx-2 text-[#b77a13]">the</span>
          DATE
        </motion.h2>

        {/* ================================= */}
        {/* SCRATCH CARD */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
          className="relative mt-[2dvh] h-[clamp(125px,20dvh,165px)] w-[min(82vw,300px)] shrink-0 overflow-hidden rounded-2xl border-2 border-[#d6a94d] shadow-lg"
        >
          {/* Hidden date */}

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#fffaf0]">
            <p className="text-[clamp(8px,1.5dvh,11px)] uppercase tracking-[0.3em] text-[#9a5c00]">
              Our Wedding
            </p>

            <p className="mt-[0.7dvh] font-serif text-[clamp(23px,4dvh,30px)] text-[#7d173c]">
              25 October
            </p>

            <p className="mt-[0.3dvh] text-[clamp(12px,2dvh,17px)] text-[#7d173c]">
              2026
            </p>
          </div>

          {/* Scratch canvas */}

          <canvas
            ref={canvasRef}
            data-lenis-prevent
            className="absolute inset-0 h-full w-full touch-none"
            onMouseDown={(e) => {
              setIsScratching(true);
              scratch(e);
            }}
            onMouseMove={(e) => {
              if (isScratching) {
                scratch(e);
              }
            }}
            onMouseUp={() => {
              setIsScratching(false);
            }}
            onMouseLeave={() => {
              setIsScratching(false);
            }}
            onTouchStart={(e) => {
              setIsScratching(true);
              scratch(e);
            }}
            onTouchMove={(e) => {
              e.preventDefault();

              if (isScratching) {
                scratch(e);
              }
            }}
            onTouchEnd={() => {
              setIsScratching(false);
            }}
          />

          {/* Instruction */}

          {!revealed && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <p className="text-[clamp(8px,1.5dvh,11px)] font-medium uppercase tracking-[0.35em] text-[#fff0c4]">
                Scratch To Reveal
              </p>
            </div>
          )}
        </motion.div>

        {/* DIVIDER */}

        <div className="mt-[1.8dvh] h-px w-24 shrink-0 bg-[#c9a76a]" />

        {/* WEDDING MUHURTHAM */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mt-[1.5dvh] shrink-0"
        >
          <h3 className="font-serif text-[clamp(19px,3dvh,25px)] font-semibold text-[#7d173c]">
            Wedding Muhurtham
          </h3>

          <p className="mt-[0.4dvh] text-[clamp(9px,1.5dvh,12px)] text-[#5b3b34]">
            6.00 AM
          </p>
        </motion.div>

        {/* VENUE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mt-[1.3dvh] shrink-0"
        >
          <h3 className="font-serif text-[clamp(18px,2.8dvh,23px)] font-semibold text-[#7d173c]">
            Venue
          </h3>

          <p className="mt-[0.4dvh] text-[clamp(7px,1.3dvh,10px)] uppercase text-[#5b3b34]">
            BALANJIKA MAHAL
          </p>

          <p className="mt-[0.2dvh] text-[clamp(7px,1.3dvh,10px)] uppercase text-[#5b3b34]">
            PERUMAL KOVIL, KUNNATHURPUDUR
          </p>
        </motion.div>

        {/* RECEPTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mt-[1.2dvh] shrink-0"
        >
          <h3 className="font-serif text-[clamp(18px,2.8dvh,23px)] font-semibold text-[#7d173c]">
            Reception
          </h3>

          <p className="mt-[0.4dvh] text-[clamp(7px,1.3dvh,10px)] text-[#5b3b34]">
            Sunday, 25 October 2026 • 11:00 AM
          </p>

          <p className="text-[clamp(7px,1.3dvh,10px)] text-[#5b3b34]">
            onwards
          </p>
        </motion.div>

        {/* CALENDAR BUTTON */}

        <motion.button
          onClick={addToCalendar}
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="mt-[1.5dvh] shrink-0 rounded-full bg-[#8b5e3c] px-[5vw] py-[0.9dvh] text-[clamp(8px,1.4dvh,11px)] font-medium text-white shadow-md"
        >
          ⌛ &nbsp; Save the Date
        </motion.button>
      </div>
    </section>
  );
}

export default SaveTheDate;
