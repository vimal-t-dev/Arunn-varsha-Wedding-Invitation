import { motion } from "motion/react";
import heroBg from "../assets/Hero-bg.jpg";

function Hero() {
  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-5 py-[3dvh] text-center">
        {/* Blessing */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="shrink-0 text-[clamp(8px,1.4dvh,11px)] font-medium uppercase tracking-[0.35em] text-[#9a5c00]"
        >
          With the blessings of our families
        </motion.p>

        {/* Om */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-[2dvh] shrink-0 text-[clamp(38px,6dvh,52px)] text-[#b77a13]"
        >
          ॐ
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-[2dvh] shrink-0"
        >
          <h1 className="font-serif text-[clamp(38px,6dvh,52px)] leading-none text-[#5b1730]">
            Arunn
          </h1>

          <div className="my-[1dvh] text-[clamp(22px,3.5dvh,30px)] text-[#9a5c00]">
            ❤️
          </div>

          <h1 className="font-serif text-[clamp(38px,6dvh,52px)] leading-none text-[#5b1730]">
            Varsha
          </h1>
        </motion.div>

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-[2.5dvh] shrink-0"
        >
          <h2 className="font-serif text-[clamp(24px,3.5dvh,30px)] leading-none text-[#24140d]">
            Arunn
          </h2>

          <p className="mt-[0.5dvh] text-[clamp(8px,1.4dvh,11px)] text-[#4a2a20]">
            S/o Mr. Thirugnanam & Mrs. Radhamani
          </p>
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-[1.8dvh] shrink-0"
        >
          <h2 className="font-serif text-[clamp(24px,3.5dvh,30px)] leading-none text-[#24140d]">
            Varsha
          </h2>

          <p className="mt-[0.5dvh] text-[clamp(8px,1.4dvh,11px)] text-[#4a2a20]">
            D/o Mr. Jayaraj & Mrs. Sreevidhya
          </p>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-[2.5dvh] max-w-xs shrink-0 font-serif text-[clamp(15px,2.5dvh,20px)] italic leading-relaxed text-[#5b1730]"
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
          className="mt-[2dvh] max-w-md shrink-0 text-[clamp(9px,1.7dvh,14px)] leading-relaxed text-[#3f2720]"
        >
          Together with their families, they invite you to celebrate the
          beginning of their forever.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
