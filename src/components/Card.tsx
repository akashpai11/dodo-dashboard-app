import React from "react";
import CardContainer from "@/components/CardContainer";

export type CardProps = {
  title: string;
  amount?: string;
  percentage?: string | number;
  color?: string;
};

const Card = (props: CardProps) => {
  return (
    <CardContainer style={{ backgroundColor: props.color }}>
      <section>
        <p className="text-sm dark:text-black font-semibold">{props.title}</p>
      </section>
      <section className="flex items-center justify-between">
        <p className="text-2xl font-semibold dark:text-black ">
          {props.amount}
        </p>
        <p
          className={`text-xs font-semibold ${
            props.percentage &&
            (Number(props.percentage) > 0 ? "text-green-600" : "text-red-600")
          }`}
        >
          {props.percentage && (Number(props.percentage) > 0 ? "+" : "")}
          {props.percentage}%
        </p>
      </section>
    </CardContainer>
  );
};

export default Card;
