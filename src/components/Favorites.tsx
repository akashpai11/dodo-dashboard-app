import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const Favorites = (props: Props) => {
  return (
    <Tabs defaultValue="favorites" className="w-[200px]">
      <TabsList>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
        <TabsTrigger value="recently">Recently</TabsTrigger>
      </TabsList>
      <TabsContent value="favorites" className="pr-2 pb-1 pl-2">
        <ul className="list-disc pl-8 gap-2">
          <li className="text-sm font-normal mb-2">Get Started</li>
          <li className="text-sm font-normal mb-2">Transactions</li>
        </ul>
      </TabsContent>
      <TabsContent value="recently" className="pr-2 pb-1 pl-2">
        {/* create bulleted list */}
        <ul className="list-disc pl-8">
          <li className="text-sm font-normal mb-2">Customers</li>
          <li className="text-sm font-normal mb-2">Checkout</li>
        </ul>
      </TabsContent>
    </Tabs>
  );
};

export default Favorites;
