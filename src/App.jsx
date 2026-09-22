import { useState } from "react";

import Opening from "./Section/opening";
import Hero from "./Section/Hero";
import SaveTheDate from "./Section/SaveTheDate";
import Countdown from "./Section/Countdown";
import Events from "./Section/Events";
import Quotes from "./Section/Quotes";
import ThankYou from "./Section/ThankYou";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {/* =========================
          OPENING INVITATION
      ========================== */}
      {!isOpened ? (
        <Opening onOpen={() => setIsOpened(true)} />
      ) : (
        /* =========================
           MAIN INVITATION CONTAINER

           100svh = mobile safe viewport height
           snap-y = vertical snap scrolling
           snap-mandatory = force snapping
        ========================== */
        <main
          className="
            h-[100svh]
            w-full
            snap-y
            snap-mandatory
            overflow-y-auto
            overflow-x-hidden
            scroll-smooth
          "
        >
          {/* =========================
              HERO
          ========================== */}
          <section
            className="
              h-[100svh]
              min-h-0
              w-full
              snap-start
              snap-always
              overflow-hidden
            "
          >
            <Hero />
          </section>

          {/* =========================
              SAVE THE DATE
          ========================== */}
          <section
            className="
              h-[100svh]
              min-h-0
              w-full
              snap-start
              snap-always
              overflow-hidden
            "
          >
            <SaveTheDate />
          </section>

          {/* =========================
              COUNTDOWN
          ========================== */}
          <section
            className="
              h-[100svh]
              min-h-0
              w-full
              snap-start
              snap-always
              overflow-hidden
            "
          >
            <Countdown />
          </section>

          {/* =========================
              EVENTS
          ========================== */}
          <section
            className="
              h-[100svh]
              min-h-0
              w-full
              snap-start
              snap-always
              overflow-hidden
            "
          >
            <Events />
          </section>

          {/* =========================
              QUOTES
          ========================== */}
          <section
            className="
              h-[100svh]
              min-h-0
              w-full
              snap-start
              snap-always
              overflow-hidden
            "
          >
            <Quotes />
          </section>

          {/* =========================
              THANK YOU
          ========================== */}
          <section
            className="
              h-[100svh]
              min-h-0
              w-full
              snap-start
              snap-always
              overflow-hidden
            "
          >
            <ThankYou />
          </section>
        </main>
      )}
    </>
  );
}

export default App;
