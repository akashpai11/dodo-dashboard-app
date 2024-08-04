"use client";
import React from "react";
import { Input } from "./ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchIcon, Sun, History, Bell, PanelLeft } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {};

const Search = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const openCommandSearch = () => {
    setOpen(true);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="flex items-center justify-center bg-dodoText/5 dark:bg-white/10 rounded-md px-2">
        <SearchIcon size={16} className="text-muted-foreground" />
        <Input
          placeholder="Search"
          className="border-none bg-transparent"
          onClick={openCommandSearch}
        />
        <p className="text-sm text-muted-foreground flex items-center">
          <span className="text-xs">⌘</span>/
        </p>
      </div>
      <div className="flex items-center">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <History className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem] " />
        </Button>
        <Button variant="ghost" size="icon">
          <PanelLeft className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Search;
