import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Search from "@/components/Search";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between border-b-[1px] border-b-dodoText/10 py-5 px-7 md:px-4 md:py-5">
      <Breadcrumbs />
      <Search />
    </div>
  );
};

export default Header;
