import Image from "next/image";

const EffectivePlanning = () => {
  const tips = [
    "Set clear and realistic goals.",
    "Prioritize tasks based on importance and deadlines.",
    "Break big tasks into smaller, manageable steps.",
    "Use tools like calendars, planners, or digital apps.",
    "Regularly review and adjust your plans as needed.",
    "Stay focused and avoid multitasking.",
    "Allocate time for unexpected delays or challenges.",
  ];

  return (
    <div className="px-6 py-12 bg-gray-100 dark:bg-neutral-900 rounded-md shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Tips Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            How to Plan Effectively
          </h2>
          <ul className="space-y-4">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs md:text-sm font-semibold">
                  {index + 1}
                </span>
                <p className="text-sm md:text-lg">{tip}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-md shadow-lg">
            <Image
              src="/images/checklist.png"
              alt="Effective planning"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectivePlanning;
