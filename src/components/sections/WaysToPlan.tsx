import EffectivePlanning from "../EffectivePlanning";
import Intro from "../Intro";

const WaysToPlan = () => {
  return (
    <section id="waysToPlan" className="flex flex-col gap-6 md:gap-16">
      <Intro
        title="Ways to Plan"
        description="Whether you're a seasoned planner or just starting out, there are many ways to plan effectively."
      />
      <EffectivePlanning />
    </section>
  );
};

export default WaysToPlan;
