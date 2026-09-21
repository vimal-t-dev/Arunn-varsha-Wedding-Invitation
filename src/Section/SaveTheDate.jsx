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

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ==========================================
      // SCRATCH CARD BACKGROUND
      // ==========================================

      ctx.fillStyle = "#a64054";

      ctx.fillRect(0, 0, rect.width, rect.height);

      // ==========================================
      // SOFT CENTER GLOW
      // ==========================================

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

        // Left side
        ctx.bezierCurveTo(
          x - size * 0.5,
          y - size * 0.1,
          x - size * 0.55,
          y + size * 0.55,
          x,
          y + size,
        );

        // Right side
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
      // SMALL DECORATIVE HEARTS
      // ==========================================

      const hearts = [
        // Top
        [28, 25, 10, true],
        [75, 18, 7, false],
        [120, 30, 11, true],
        [165, 17, 7, false],
        [215, 28, 10, true],
        [265, 18, 7, false],

        // Upper middle
        [18, 72, 7, false],
        [52, 90, 13, true],
        [100, 70, 8, true],
        [145, 92, 7, false],
        [195, 70, 12, true],
        [245, 88, 8, false],
        [282, 65, 12, true],

        // Middle
        [30, 125, 10, true],
        [75, 140, 7, false],
        [118, 120, 11, true],
        [165, 145, 8, false],
        [215, 125, 13, true],
        [260, 145, 7, false],

        // Lower middle
        [18, 175, 7, false],
        [58, 195, 12, true],
        [105, 175, 8, false],
        [145, 205, 12, true],
        [190, 180, 7, false],
        [235, 200, 11, true],
        [280, 175, 7, false],

        // Bottom
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
      // CENTER DECORATIVE HEART
      // ==========================================

      const centerX = rect.width / 2;

      const centerY = rect.height / 2 + 5;

      ctx.shadowColor = "rgba(255, 220, 160, 0.6)";

      ctx.shadowBlur = 15;

      drawHeart(centerX, centerY - 18, 32, "#f7d78d", true);

      ctx.shadowBlur = 0;

      // ==========================================
      // CENTER SPARKLES
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

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // ==========================================
  // CHECK SCRATCH PERCENTAGE
  // ==========================================

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;

    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    const width = canvas.width;

    const height = canvas.height;

    const imageData = ctx.getImageData(0, 0, width, height);

    const pixels = imageData.data;

    let transparentPixels = 0;

    let totalPixels = 0;

    // Check every 10th pixel
    for (let y = 0; y < height; y += 10) {
      for (let x = 0; x < width; x += 10) {
        const index = (y * width + x) * 4;

        const alpha = pixels[index + 3];

        totalPixels++;

        if (alpha < 100) {
          transparentPixels++;
        }
      }
    }

    const scratchedPercentage = (transparentPixels / totalPixels) * 100;

    console.log("Scratched:", scratchedPercentage.toFixed(1), "%");

    // ==========================================
    // AUTO REVEAL AT 25%
    // ==========================================

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

    const rect = canvas.getBoundingClientRect();

    // Remove entire scratch layer
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Reveal date
    setRevealed(true);

    // Stop scratching
    setIsScratching(false);

    // ==========================================
    // START HEART POPPER
    // ==========================================

    setShowHeartBurst(true);

    // ==========================================
    // REMOVE HEARTS AFTER ANIMATION
    // ==========================================

    setTimeout(() => {
      setShowHeartBurst(false);
    }, 2800);
  };

  // ==========================================
  // SCRATCH FUNCTION
  // ==========================================

  const scratch = (event) => {
    if (revealed) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    // Touch
    if (event.touches) {
      clientX = event.touches[0].clientX;

      clientY = event.touches[0].clientY;
    }

    // Mouse
    else {
      clientX = event.clientX;

      clientY = event.clientY;
    }

    const x = clientX - rect.left;

    const y = clientY - rect.top;

    const ctx = canvas.getContext("2d");

    // Remove scratch layer
    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();

    ctx.arc(x, y, 24, 0, Math.PI * 2);

    ctx.fill();

    ctx.globalCompositeOperation = "source-over";

    // Check progress
    checkScratchPercentage();
  };

  // ==========================================
  // ADD TO CALENDAR
  // ==========================================

  const addToCalendar = () => {
    const event = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Arunn & varsha Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",

      "BEGIN:VEVENT",

      "UID:iamvimal.2002@gmail.com",

      "DTSTAMP:20261025T000000Z",

      "DTSTART;TZID=Asia/Kolkata:20261025T060000",

      "DTEND;TZID=Asia/Kolkata:20261025T080000",

      "SUMMARY:Arunn & Varsha Wedding",

      "DESCRIPTION:Wedding Muhurtham of Arunn & Varsha.",

      "LOCATION:BALANJIKA MAHAL, PERUMAL KOVIL, KUNNATHURPUDUR",

      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      "DESCRIPTION:Tomorrow is Arunn & varsha's Wedding!",
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

    link.download = "Hariharan-Kaviya-Wedding.ics";

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
      className="relative min-h-screen overflow-hidden bg-cover bg-center px-6 py-20"
      style={{
        backgroundImage: `url(${saveTheDateBg})`,
      }}
    >
      {/* ================================= */}
      {/* HEART POPPER ANIMATION */}
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

      {/* ================================= */}
      {/* BACKGROUND OVERLAY */}
      {/* ================================= */}

      <div className="absolute inset-0 bg-white/50" />

      {/* ================================= */}
      {/* MAIN CONTENT */}
      {/* ================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center text-center">
        {/* ================================= */}
        {/* HEADING */}
        {/* ================================= */}

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
          className="mt-30 text-[10px] uppercase tracking-[0.35em] text-[#7d173c]"
        >
          Mark Your Heart
        </motion.p>

        <motion.h2
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
            delay: 0.2,
          }}
          className="mt-3 font-serif text-4xl leading-none text-[#7d173c]"
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
          className="relative mt-8 h-44 w-full max-w-[300px] overflow-hidden rounded-2xl border-2 border-[#d6a94d] shadow-lg"
        >
          {/* ================================= */}
          {/* HIDDEN DATE */}
          {/* ================================= */}

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#fffaf0]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9a5c00]">
              Our Wedding
            </p>

            <p className="mt-2 font-serif text-3xl text-[#7d173c]">
              25 October
            </p>

            <p className="mt-1 text-lg text-[#7d173c]">2026</p>
          </div>

          {/* ================================= */}
          {/* SCRATCH CANVAS */}
          {/* ================================= */}

          <canvas
            ref={canvasRef}
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

          {/* ================================= */}
          {/* SCRATCH INSTRUCTIONS */}
          {/* ================================= */}

          {!revealed && (
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#fff0c4]">
                Scratch To Reveal
              </p>

              {/* <p className="mt-12 text-[9px] tracking-[0.2em] text-[#fff0c4]">
                Swipe 2–3 times
              </p> */}
            </div>
          )}
        </motion.div>

        {/* ================================= */}
        {/* DIVIDER */}
        {/* ================================= */}

        <div className="mt-8 h-px w-32 bg-[#c9a76a]" />

        {/* ================================= */}
        {/* WEDDING MUHURTHAM */}
        {/* ================================= */}

        <motion.div
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
          className="mt-8"
        >
          <h3 className="font-serif text-2xl font-semibold text-[#7d173c]">
            Wedding Muhurtham
          </h3>

          <p className="mt-2 text-sm text-[#5b3b34]">6.00 AM</p>
        </motion.div>

        {/* ================================= */}
        {/* VENUE */}
        {/* ================================= */}

        <motion.div className="mt-6">
          <h3 className="font-serif text-2xl font-semibold text-[#7d173c]">
            Venue
          </h3>

          <p className="mt-2 text-xs uppercase text-[#5b3b34]">
            BALANJIKA MAHAL
          </p>

          <p className="mt-1 text-xs uppercase text-[#5b3b34]">
            PERUMAL KOVIL, KUNNATHURPUDUR
          </p>
        </motion.div>

        {/* ================================= */}
        {/* RECEPTION */}
        {/* ================================= */}

        <motion.div className="mt-6">
          <h3 className="font-serif text-2xl font-semibold text-[#7d173c]">
            Reception
          </h3>

          <p className="mt-2 text-xs text-[#5b3b34]">
            Sunday, 25 October 2026 • 11:00 AM
          </p>

          <p className="text-xs text-[#5b3b34]">onwards</p>
        </motion.div>

        {/* ================================= */}
        {/* ADD TO CALENDAR */}
        {/* ================================= */}

        <motion.button
          onClick={addToCalendar}
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="mt-8 rounded-full bg-yellow-600 px-8 py-4 text-sm font-medium text-white shadow-md"
        >
          ⌛ &nbsp; Save the Date
        </motion.button>
      </div>
    </section>
  );
}

export default SaveTheDate;
