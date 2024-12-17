interface Props {
  title: string;
  description: string;
}

const Intro = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-3 md:gap-6 items-center md:items-start">
      <div className="flex gap-1 items-center justify-center">
        <hr className="w-24 rounded-xl border-1 self-center border-gray-800 dark:border-neutral-200 md:border-2 md:w-36" />
        <h2 className="text-center text-xl font-bold md:text-4xl">{title}</h2>
        <hr className="w-24 rounded-xl border-1 self-center border-gray-800 dark:border-neutral-200 md:border-2 md:w-36" />
      </div>
      <div>
        <p className=" text-center md:text-start text-xs md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Intro;
