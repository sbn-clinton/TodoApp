import React from "react";

const PlanningBenefits = () => {
  const advice = [
    {
      text: "In preparing for battle, I have always found that plans are useless, but planning is indispensable.",
      author: "Dwight D. Eisenhower",
      description:
        "Planning allows us to adapt to unexpected situations, ensuring that we're better prepared to face challenges even if our initial plans change.",
    },
    {
      text: "Give me six hours to chop down a tree, and I will spend the first four sharpening the axe.",
      author: "Abraham Lincoln",
      description:
        "Effective planning maximizes productivity by allowing us to focus our energy where it matters most, avoiding wasted effort.",
    },
    {
      text: "The time to repair the roof is when the sun is shining.",
      author: "John F. Kennedy",
      description:
        "Planning ahead prevents crises by addressing potential issues during moments of stability, ensuring smoother progress in the future.",
    },
    {
      text: "A good plan today is better than a perfect plan tomorrow.",
      author: "George S. Patton",
      description:
        "Timely planning helps us take action and make progress, rather than waiting for the elusive 'perfect' opportunity.",
    },
    {
      text: "By failing to prepare, you are preparing to fail.",
      author: "Benjamin Franklin",
      description:
        "Preparation is the foundation of success, enabling us to meet challenges confidently and avoid unnecessary setbacks.",
    },
  ];

  return (
    <div className="px-6 py-12 bg-gray-100 dark:bg-neutral-900 rounded-md shadow-md">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          The Power of Planning
        </h2>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-8">
          Planning is not just about creating a roadmap—it’s about preparing for
          opportunities and challenges alike. Explore timeless advice from great
          thinkers who understood the transformative power of preparation.
        </p>
        <div className="space-y-6">
          {advice.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-neutral-700"
            >
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-200 italic">
                &quot;{item.text}&quot;
              </p>
              <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              <p className="mt-2 text-right text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-400">
                - {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanningBenefits;
