import { motion } from "motion/react";

function ThankYou() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#240615]">
      {/* Subtle background dots */}
      <div className="absolute inset-0 opacity-40">
        <span className="absolute left-[18%] top-[22%] h-[2px] w-[2px] rounded-full bg-[#d9a441]" />

        <span className="absolute left-[70%] top-[17%] h-[2px] w-[2px] rounded-full bg-[#d9a441]" />

        <span className="absolute left-[30%] top-[38%] h-[2px] w-[2px] rounded-full bg-[#d9a441]" />

        <span className="absolute left-[82%] top-[44%] h-[2px] w-[2px] rounded-full bg-[#d9a441]" />

        <span className="absolute left-[15%] top-[67%] h-[2px] w-[2px] rounded-full bg-[#d9a441]" />

        <span className="absolute left-[76%] top-[72%] h-[2px] w-[2px] rounded-full bg-[#d9a441]" />

        <span className="absolute left-[45%] top-[82%] h-[2px] w-[2px] rounded-full bg-[#d9a441]" />
      </div>

      {/* Main content */}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Sparkle */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-2 text-3xl text-[#e8a94a]"
        >
          ✦
        </motion.div>

        {/* Thank You */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-[72px] font-medium leading-[0.8] italic text-[#ffe39a]"
        >
          Thank
          <br />
          You
        </motion.h2>

        {/* Message */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="mt-12 max-w-[280px] font-serif text-[26px] leading-[1.2] text-[#f5d783]"
        >
          for being a part of
          <br />
          our happiness
        </motion.p>

        {/* Heart */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          className="mt-10 text-2xl text-[#e8a94a]"
        >
          ♥
        </motion.div>

        {/* Credit */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-[9px] tracking-[0.15em] text-[#d7b978]">
            made with love by
          </p>

          <div className="mt-2 flex items-center gap-2">
            <p className="text-[10px] font-medium tracking-wide text-[#f1d99b]">
              @__.vimal_
            </p>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/__.vimal_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg transition-transform hover:scale-110"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />

                <circle cx="12" cy="12" r="4" />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  className="fill-current stroke-none"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom curved effect */}

      <div className="absolute bottom-[-40px] left-1/2 h-20 w-[120%] -translate-x-1/2 rounded-[50%] bg-[#16030c]" />
    </section>
  );
}

export default ThankYou;
