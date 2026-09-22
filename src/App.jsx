import { useState } from "react";

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

  return (
    <>
      {!isOpened ? (
        <Opening onOpen={() => setIsOpened(true)} />
      ) : (
        <main className="h-[100dvh] w-full snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">

          {/* HERO */}
          <FitSection>
            <Hero />
          </FitSection>

          {/* SAVE THE DATE */}
          <FitSection>
            <SaveTheDate />
          </FitSection>

          {/* COUNTDOWN */}
          <FitSection>
            <Countdown />
          </FitSection>

          {/* EVENTS */}
          <FitSection>
            <Events />
          </FitSection>

          {/* QUOTES */}
          <FitSection>
            <Quotes />
          </FitSection>

          {/* THANK YOU */}
          <FitSection>
            <ThankYou />
          </FitSection>

        </main>
      )}
    </>
  );
}

export default App;