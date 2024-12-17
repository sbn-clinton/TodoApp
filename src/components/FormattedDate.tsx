import React from "react";
import { cn } from "@/lib/utils"; // Assuming you use a utility class merger

interface FormattedDateProps {
  createdAt: string | Date; // Accepts a date string or a Date object
  className?: string; // Optional for additional styles
}

const FormattedDate: React.FC<FormattedDateProps> = ({
  createdAt,
  className,
}) => {
  const date = new Date(createdAt);

  // Format the date into Month Day, Year format
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <span
      className={cn(
        "text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200",
        className
      )}
    >
      {formattedDate}
    </span>
  );
};

export default FormattedDate;
