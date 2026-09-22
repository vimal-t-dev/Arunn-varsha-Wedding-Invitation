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
      {!isOpened ? (
        <Opening onOpen={() => setIsOpened(true)} />
      ) : (
        <main className="h-screen snap-y snap-mandatory overflow-y-auto">
          {/* Hero */}
          <section className="min-h-screen snap-start">
            <Hero />
          </section>

          {/* Save The Date */}
          <section className="min-h-screen snap-start">
            <SaveTheDate />
          </section>

          {/* Countdown */}
          <section className="min-h-screen snap-start">
            <Countdown />
          </section>

          {/* Events */}
          <section className="min-h-screen snap-start">
            <Events />
          </section>

          {/* Quotes */}
          <section className="min-h-screen snap-start">
            <Quotes />
          </section>

          {/* Thank You */}
          <section className="min-h-screen snap-start">
            <ThankYou />
          </section>
        </main>
      )}
    </>
  );
}

export default App;
