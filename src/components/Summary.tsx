import { ArrowBigDown, ArrowDown, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Card, { CardProps } from "./Card";

type Props = {};

const Summary = (props: Props) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/summary")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);
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
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Summary;
