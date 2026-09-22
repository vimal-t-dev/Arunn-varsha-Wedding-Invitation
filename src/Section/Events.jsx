import { motion } from "motion/react";

import eventsBg from "../assets/Save-The-Date-bg.jpg";
import receptionImage from "../assets/Reception image.jpg";
import marriageImage from "../assets/Marraige image.jpg";

function Events() {
  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${eventsBg})`,
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col justify-center px-4 py-[2dvh]">
        {/* ========================= */}
        {/* HEADING */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shrink-0 text-center"
        >
          <p className="text-[clamp(7px,1.3dvh,10px)] uppercase tracking-[0.35em] text-[#d99b24]">
            Celebrate With Us
          </p>

          <h2 className="mt-[0.8dvh] font-serif text-[clamp(32px,5.5dvh,46px)] leading-[0.9] text-white">
            Wedding
          </h2>

          <h3 className="font-serif text-[clamp(26px,4.5dvh,38px)] italic leading-none text-[#e3b65d]">
            Festivities
          </h3>
        </motion.div>

        {/* ========================= */}
        {/* WEDDING */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-[2dvh] h-[27dvh] min-h-0 shrink-0 overflow-hidden rounded-[clamp(20px,3.5dvh,32px)] border border-white/40 bg-[#fffaf0]/90 shadow-xl backdrop-blur-sm"
        >
          <div className="flex h-full">
            {/* Details */}
            <div className="flex w-[57%] flex-col justify-center px-[3.5vw] py-[1dvh]">
              <p className="text-[clamp(6px,1.1dvh,8px)] font-medium uppercase tracking-[0.25em] text-[#b47714]">
                02 • Wedding
              </p>

              <h3 className="mt-[0.7dvh] font-serif text-[clamp(19px,3dvh,25px)] leading-[0.9] text-[#671638]">
                Wedding
                <br />
                Muhurtham
              </h3>

              <div className="mt-[1.2dvh] text-[clamp(10px,1.7dvh,14px)] leading-[1.35] text-[#4f3630]">
                <p>Sunday, 25</p>
                <p>October 2026</p>
                <p className="mt-[0.4dvh]">6:00 AM</p>
              </div>

              <p className="mt-[1dvh] text-[clamp(7px,1.35dvh,10px)] leading-[1.35] text-[#67514b]">
                Balanjika Mahal
                <br />
                Perumal Kovil,
                <br />
                Kunnathurpudur
              </p>

              <button
                type="button"
                className="mt-[1dvh] w-fit rounded-full bg-[#8b244d] px-[3vw] py-[0.8dvh] text-[clamp(7px,1.25dvh,10px)] font-semibold text-white shadow-md transition-transform hover:scale-105"
              >
                📍 Open Location
              </button>
            </div>

            {/* Image */}
            <div className="w-[43%] overflow-hidden">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-[1.8dvh] h-[25dvh] min-h-0 shrink-0 overflow-hidden rounded-[clamp(20px,3.5dvh,32px)] border border-white/40 bg-[#fffaf0]/90 shadow-xl backdrop-blur-sm"
        >
          <div className="flex h-full">
            {/* Image */}
            <div className="w-[43%] overflow-hidden">
              <img
                src={receptionImage}
                alt="Reception"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex w-[57%] flex-col justify-center px-[3.5vw] py-[1dvh]">
              <p className="text-[clamp(6px,1.1dvh,8px)] font-medium uppercase tracking-[0.25em] text-[#b47714]">
                01 • Reception
              </p>

              <h3 className="mt-[0.7dvh] font-serif text-[clamp(21px,3.2dvh,28px)] leading-none text-[#671638]">
                Reception
              </h3>

              <div className="mt-[1.2dvh] text-[clamp(10px,1.7dvh,14px)] leading-[1.35] text-[#4f3630]">
                <p>Sunday, 25</p>
                <p>October 2026</p>
                <p className="mt-[0.4dvh]">11:00 AM onwards</p>
              </div>

              <p className="mt-[1dvh] text-[clamp(7px,1.35dvh,10px)] leading-[1.35] text-[#67514b]">
                Balanjika Mahal
                <br />
                Kunnathurpudur
              </p>

              <button
                type="button"
                className="mt-[1dvh] w-fit rounded-full bg-[#8b244d] px-[3vw] py-[0.8dvh] text-[clamp(7px,1.25dvh,10px)] font-semibold text-white shadow-md transition-transform hover:scale-105"
              >
                📍 Open Location
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Events;
