import { ArrowBigDown, ArrowDown, ChevronDown } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Card, { CardProps } from "./Card";

type Props = {};

const cardData: CardProps[] = [
  {
    title: "Revenue",
    amount: "$24M",
    percentage: "11.01",
    color: "#F9FEF0",
  },
  {
    title: "Transaction",
    amount: "14K",
    percentage: "-0.03",
    color: "#DBE6F2",
  },
  {
    title: "Average transaction",
    amount: "$2K",
    percentage: "15.03",
    color: "#F9FEF0",
  },
  {
    title: "Refunds",
    amount: "1K",
    percentage: "6.08",
    color: "#DBE6F2",
  },
];

const Summary = (props: Props) => {
  return (
    <div className="mb-4">
      <Button
        className="text-sm font-semibold text-dodoText dark:text-white rounded-md py-2 px-2 mb-2"
        variant="ghost"
      >
        Today
        <span className="text-dodoText/40 dark:text-white">
          <ChevronDown size={16} />
        </span>
      </Button>

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Summary;
