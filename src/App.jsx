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
        <main>
          <Hero />
          <SaveTheDate />
          <Countdown />
          <Events />
          <Quotes />
          <ThankYou />
        </main>
      )}
    </>
  );
}

export default App;
