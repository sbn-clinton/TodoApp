import Benefit from "@/components/sections/Benefit";
import Hero from "@/components/sections/Hero";
import Quotes from "@/components/sections/Quotes";
import WaysToPlan from "@/components/sections/WaysToPlan";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Quotes />
      <Benefit />
      <WaysToPlan />
    </div>
  );
};

export default HomePage;
