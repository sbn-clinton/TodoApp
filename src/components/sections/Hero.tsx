import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4 md:gap-6">
          <h1 className="text-3xl font-extrabold text-center md:text-start md:text-6xl">
            Organize Your Day, Achieve More
          </h1>
          <p className="text-center md:text-start text-base md:text-lg">
            Streamline your tasks and goals with ease. Whether you&apos;re
            managing personal errands or team projects, our Todo App empowers
            you to plan effectively and stay on track. Turn your to-dos into
            accomplishments!
          </p>
          <Button asChild className=" bg-sky-700 text-white">
            <Link href="/signin" className="">
              Get Started
            </Link>
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/team-meeting.png"
            alt="Organized Team Collaboration"
            width={500}
            height={500}
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
