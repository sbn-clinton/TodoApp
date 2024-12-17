import Intro from "../Intro";
import PlanningBenefits from "../PlanningBenefits";

const Benefit = () => {
  return (
    <section id="benefits" className="flex flex-col gap-6 md:gap-16">
      <Intro
        title="Benefits"
        description="Discover the benefits planning can bring to your life."
      />
      <PlanningBenefits />
    </section>
  );
};

export default Benefit;
