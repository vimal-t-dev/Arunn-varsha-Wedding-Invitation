import { motion } from "motion/react";

import saveTheDateBg from "../assets/Save-The-Date-bg.jpg";

function SaveTheDate() {
  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${saveTheDateBg})`,
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-5 py-[3dvh] text-center">
        {/* Small heading */}
        <motion.p
          initial={{
            opacity: 0,
            y: -20,
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
          className="shrink-0 text-[clamp(8px,1.4dvh,11px)] font-medium uppercase tracking-[0.35em] text-[#9a5c00]"
        >
          Save The Date
        </motion.p>

        {/* Main title */}
        <motion.h1
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
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-[1.5dvh] shrink-0 font-serif text-[clamp(38px,6dvh,52px)] leading-none text-[#5b1730]"
        >
          Arunn
        </motion.h1>

        {/* & */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="my-[0.8dvh] shrink-0 font-serif text-[clamp(20px,3dvh,28px)] text-[#9a5c00]"
        >
          &
        </motion.div>

        {/* Bride name */}
        <motion.h1
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
            duration: 0.9,
            delay: 0.5,
          }}
          className="shrink-0 font-serif text-[clamp(38px,6dvh,52px)] leading-none text-[#5b1730]"
        >
          Varsha
        </motion.h1>

        {/* Date */}
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
            duration: 0.9,
            delay: 0.7,
          }}
          className="mt-[3dvh] shrink-0"
        >
          <p className="text-[clamp(8px,1.4dvh,11px)] uppercase tracking-[0.3em] text-[#9a5c00]">
            Sunday
          </p>

          <p className="mt-[0.5dvh] font-serif text-[clamp(46px,7dvh,62px)] leading-none text-[#671638]">
            25
          </p>

          <p className="mt-[0.5dvh] font-serif text-[clamp(20px,3dvh,28px)] text-[#671638]">
            October 2026
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          className="my-[2dvh] h-px w-[35%] shrink-0 bg-[#c99b52]"
        />

        {/* Venue */}
        <motion.div
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
            delay: 1,
          }}
          className="shrink-0"
        >
          <p className="text-[clamp(8px,1.3dvh,10px)] uppercase tracking-[0.3em] text-[#9a5c00]">
            Venue
          </p>

          <p className="mt-[0.7dvh] font-serif text-[clamp(20px,3dvh,27px)] text-[#671638]">
            Balanjika Mahal
          </p>

          <p className="mt-[0.4dvh] text-[clamp(8px,1.4dvh,11px)] leading-relaxed text-[#5b4037]">
            Perumal Kovil,
            <br />
            Kunnathurpudur
          </p>
        </motion.div>

        {/* Bottom message */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          className="mt-[2.5dvh] max-w-xs shrink-0 font-serif text-[clamp(13px,2dvh,17px)] italic leading-relaxed text-[#6d1739]"
        >
          We would love to celebrate
          <br />
          this beautiful day with you.
        </motion.p>
      </div>
    </section>
  );
}

export default SaveTheDate;
