import { motion } from "motion/react";
import quotesBg from "../assets/Quotes-bg.jpg";

function Quotes() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${quotesBg})`,
      }}
    >
      <div className="relative z-10 flex min-h-screen items-center justify-center px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-[290px]"
        >
          {/* Forever */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl leading-[0.9] text-yellow-500"
          >
            Forever
          </motion.h2>

          {/* Together */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-[-4px] font-serif text-4xl italic text-amber-500"
          >
            Together
          </motion.p>

          {/* Infinity */}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-3 text-3xl text-amber-500"
          >
            ∞
          </motion.div>

          {/* Quote */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-5 font-serif text-[22px] leading-[1.35] text-amber-500"
          >
            However near or far
            <br />
            you travel,
            <br />
            your blessings will
            <br />
            always be
            <br />
            part of our story.
          </motion.p>

          {/* With Love */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-sm text-amber-500"
          >
            With love,
          </motion.p>

          {/* Names */}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-1 font-serif text-xl italic text-amber-500"
          >
            Arunn <span className="mx-1 text-pink-300">♥</span> Varsha
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Quotes;
