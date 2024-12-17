import { FocusCardsDemo } from "../FocusCardsDemo";
import Intro from "../Intro";

const Quotes = () => {
  return (
    <section id="quotez" className="flex flex-col gap-6 md:gap-16">
      <Intro
        title="Quotez"
        description="Explore inspiring quotes that highlight the power of planning,
          determination, and strategy for success."
      />
      <FocusCardsDemo />
    </section>
  );
};

export default Quotes;
