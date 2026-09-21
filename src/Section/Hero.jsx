import { motion } from "motion/react";
import heroBg from "../assets/Hero-bg.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-5 py-16 text-center">
        {/* Blessing */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#9a5c00] sm:text-xs"
        >
          With the blessings of our families
        </motion.p>

        {/* Om */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-5xl text-[#b77a13]"
        >
          ॐ
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <h1 className="font-serif text-5xl text-[#5b1730] sm:text-6xl">
            Arunn
          </h1>

          <div className="my-2 text-3xl text-[#9a5c00]">❤️</div>

          <h1 className="font-serif text-5xl text-[#5b1730] sm:text-6xl">
            Varsha
          </h1>
        </motion.div>

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <h2 className="font-serif text-3xl text-[#24140d]">Arunn</h2>

          <p className="mt-1 text-[11px] text-[#4a2a20]">
            S/o Mr. Thirugnanam & Mrs. Radhamani
          </p>
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6"
        >
          <h2 className="font-serif text-3xl text-[#24140d]">Varsha</h2>

          <p className="mt-1 text-[11px] text-[#4a2a20]">
            D/o Mr. Jayaraj & Mrs. Sreevidhya
          </p>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 max-w-xs font-serif text-xl italic leading-relaxed text-[#5b1730]"
        >
          "Two hearts, two families,
          <br />
          one beautiful beginning."
        </motion.p>

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-8 max-w-md text-sm leading-6 text-[#3f2720]"
        >
          Together with their families, they invite you to celebrate the
          beginning of their forever.
        </motion.p>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-10 flex flex-col items-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#a86614]">
            Scroll to begin
          </p>

          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-2 text-xl text-[#a86614]"
          >
            ↓
          </motion.span> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}

export default Hero;
