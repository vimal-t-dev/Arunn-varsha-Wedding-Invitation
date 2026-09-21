import { motion } from "motion/react";

import eventsBg from "../assets/Save-The-Date-bg.jpg";
import receptionImage from "../assets/Reception image.jpg";
import marriageImage from "../assets/Marraige image.jpg";

function Events() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center px-4 py-20"
      style={{
        backgroundImage: `url(${eventsBg})`,
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-md">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#d99b24]">
            Celebrate With Us
          </p>

          <h2 className="mt-3 font-serif text-5xl leading-[0.9] text-white">
            Wedding
          </h2>

          <h3 className="font-serif text-4xl italic text-[#e3b65d]">
            Festivities
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 overflow-hidden rounded-[32px] border border-white/40 bg-[#fffaf0]/90 shadow-xl backdrop-blur-sm"
        >
          <div className="flex min-h-[240px]">
            {/* Details */}
            <div className="flex w-[57%] flex-col justify-center px-5 py-6">
              <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#b47714]">
                02 • Wedding
              </p>

              <h3 className="mt-2 font-serif text-2xl leading-[0.9] text-[#671638]">
                Wedding
                <br />
                Muhurtham
              </h3>

              <div className="mt-4 text-sm leading-5 text-[#4f3630]">
                <p>Sunday, 25</p>
                <p>October 2026</p>
                <p className="mt-1">6:00 AM</p>
              </div>

              <p className="mt-3 text-[11px] leading-4 text-[#67514b]">
                Balanjika Mahal
                <br />
                Perumal Kovil,
                <br />
                Kunnathurpudur
              </p>

              <button
                type="button"
                className="mt-4 w-fit rounded-full bg-[#8b244d] px-4 py-2 text-[10px] font-semibold text-white shadow-md transition-transform hover:scale-105"
              >
                📍 Open Location
              </button>
            </div>

            {/* Image */}
            <div className="flex w-[43%] items-end justify-center overflow-hidden">
              <img
                src={marriageImage}
                alt="Wedding Muhurtham"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* RECEPTION */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-[32px] border border-white/40 bg-[#fffaf0]/90 shadow-xl backdrop-blur-sm"
        >
          <div className="flex min-h-[220px]">
            {/* Image */}
            <div className="flex w-[43%] items-end justify-center overflow-hidden">
              <img
                src={receptionImage}
                alt="Reception"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex w-[57%] flex-col justify-center px-4 py-6">
              <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#b47714]">
                01 • Reception
              </p>

              <h3 className="mt-2 font-serif text-3xl leading-none text-[#671638]">
                Reception
              </h3>

              <div className="mt-3 text-sm leading-5 text-[#4f3630]">
                <p>Sunday, 25</p>
                <p>October 2026</p>
                <p className="mt-1">11:00 AM onwards</p>
              </div>

              <p className="mt-3 text-[11px] leading-4 text-[#67514b]">
                Balanjika Mahal
                <br />
                Kunnathurpudur
              </p>

              <button
                type="button"
                className="mt-4 w-fit rounded-full bg-[#8b244d] px-4 py-2 text-[10px] font-semibold text-white shadow-md transition-transform hover:scale-105"
              >
                📍 Open Location
              </button>
            </div>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* WEDDING */}
        {/* ========================= */}

        {/* Bottom spacing */}
        <div className="h-12" />
      </div>
    </section>
  );
}

export default Events;
