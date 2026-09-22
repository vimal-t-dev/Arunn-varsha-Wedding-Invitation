import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import Opening from "./Section/opening";
import Hero from "./Section/Hero";
import SaveTheDate from "./Section/SaveTheDate";
import Countdown from "./Section/Countdown";
import Events from "./Section/Events";
import Quotes from "./Section/Quotes";
import ThankYou from "./Section/ThankYou";

import FitSection from "./Section/FitSection";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const mainRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOpened || !mainRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: mainRef.current,
      content: contentRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isOpened]);

  return (
    <>
      {!isOpened ? (
        <Opening onOpen={() => setIsOpened(true)} />
      ) : (
        <main
          ref={mainRef}
          className="
            h-[100dvh]
            w-full
            overflow-y-auto
            overflow-x-hidden
            overscroll-y-none
            [scrollbar-width:none]
            [-ms-overflow-style:none]
          "
        >
          <div ref={contentRef} className="w-full">
            <FitSection>
              <Hero />
            </FitSection>

            <FitSection>
              <SaveTheDate />
            </FitSection>

            <FitSection>
              <Countdown />
            </FitSection>

            <FitSection>
              <Events />
            </FitSection>

            <FitSection>
              <Quotes />
            </FitSection>

            <FitSection>
              <ThankYou />
            </FitSection>
          </div>
        </main>
      )}
    </>
  );
}

export default App;