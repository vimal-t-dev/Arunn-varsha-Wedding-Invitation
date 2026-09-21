import { useState } from "react";
import { motion } from "motion/react";
import openingInvitation from "../assets/Opening-invitation.png";

function Opening({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Wait for door animation to finish
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#1a0f0a]">
      {/* ================================================= */}
      {/* LEFT DOOR */}
      {/* ================================================= */}

      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: isOpening ? "-100%" : "0%",
        }}
        transition={{
          duration: 1.5,
          ease: [0.65, 0, 0.35, 1],
        }}
        onClick={handleOpen}
        className="absolute left-0 top-0 h-full w-1/2 cursor-pointer overflow-hidden"
      >
        {/* Full image - LEFT half */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${openingInvitation})`,
            backgroundSize: "200% 100%",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Slight door shadow on center edge */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black/40 to-transparent" />
      </motion.div>

      {/* ================================================= */}
      {/* RIGHT DOOR */}
      {/* ================================================= */}

      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: isOpening ? "100%" : "0%",
        }}
        transition={{
          duration: 1.5,
          ease: [0.65, 0, 0.35, 1],
        }}
        onClick={handleOpen}
        className="absolute right-0 top-0 h-full w-1/2 cursor-pointer overflow-hidden"
      >
        {/* Full image - RIGHT half */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${openingInvitation})`,
            backgroundSize: "200% 100%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Slight door shadow on center edge */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black/40 to-transparent" />
      </motion.div>

      {/* ================================================= */}
      {/* CENTER SEAM */}
      {/* ================================================= */}

      {!isOpening && (
        <div className="pointer-events-none absolute left-1/2 top-0 z-30 h-full w-[2px] -translate-x-1/2 bg-[#7c4b25]/80" />
      )}

      {/* ================================================= */}
      {/* OPEN BUTTON */}
      {/* ================================================= */}

      {!isOpening && (
        <motion.button
          onClick={handleOpen}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            absolute
            bottom-[16%]
            left-1/2
            z-50
            -translate-x-1/2
            border
            border-[#e3bd69]
            bg-[#3b1712]/90
            px-10
            py-4
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-[#f5d98a]
            shadow-xl
            backdrop-blur-sm
          "
        >
          Touch To Open
        </motion.button>
      )}

      {/* ================================================= */}
      {/* OPENING LIGHT EFFECT */}
      {/* ================================================= */}

      {isOpening && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.15, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 z-[100] bg-white"
        />
      )}
    </div>
  );
}

export default Opening;
