import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      src: "/images/cards/Franklin.png",
      quote: "Failing to plan is planning to fail.",
      author: "Benjamin Franklin",
    },
    {
      src: "/images/cards/french.jpg",
      quote: "A goal without a plan is just a wish.",
      author: "Antoine de Saint-Exupéry",
    },
    {
      src: "/images/cards/hill.jpg",
      quote: "Plan your work and work your plan.",
      author: "Napoleon Hill",
    },
    {
      src: "/images/cards/usa.jpg",
      quote: "Good planning without good working is nothing.",
      author: "Dwight D. Eisenhower",
    },
    {
      src: "/images/cards/alan.jpg",
      quote: "Planning is bringing the future into the present.",
      author: "Alan Lakein",
    },
    {
      src: "/images/cards/zig.png",

      quote:
        "You don’t have to be great to start, but you have to start to be great.",
      author: "Zig Ziglar",
    },
  ];

  return <FocusCards cards={cards} />;
}
