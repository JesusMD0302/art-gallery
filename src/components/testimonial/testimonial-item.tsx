import { QuoteIcon } from "lucide-react";

interface TestimonialItemProps {
  content: string;
  personName: string;
  personDesignation: string;
}

export const TestimonialItem = ({
  content,
  personName,
  personDesignation,
}: TestimonialItemProps) => {
  return (
    <article className="grid gap-12 place-items-center px-4">
      <QuoteIcon />
      <p className="font-heading font-medium text-2xl">{content}</p>
      <p className="font-semibold text-base">
        {personName}{" "}
        <span className="font-normal ml-2">{personDesignation}</span>
      </p>
    </article>
  );
};
