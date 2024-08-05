"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    icon: LucideIcon;
    href: string;
    children?: any;
    variant: "default" | "ghost" | "outline" | "secondary" | "destructive";
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathName = usePathname();

  const [openIndices, setopenIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {};

  return (
    // <TooltipProvider>
    //   <div
    //     data-collapsed={isCollapsed}
    //     className="group flex flex-col gap-2 py-4 data-[collapsed=true]:py-1"
    //   >
    //     <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
    //       {links.map((link, index) => (
    //         <div key={index}>
    //           {link.children ? (
    //             <div className="flex flex-col">
    //               <Accordion>
    //                 <Accordion.Trigger>
    //                   <span
    //                     className={cn(
    //                       "flex items-center cursor-pointer text-sm",
    //                       link.variant === "outline" &&
    //                         "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
    //                       "justify-start"
    //                     )}
    //                   >
    //                     <link.icon className="h-4 w-4 mr-3" />
    //                     {link.title}
    //                   </span>
    //                 </Accordion.Trigger>
    //                 <Accordion.Content>
    //                   <div className="ml-4">
    //                     {link?.children.map((child: any, index: any) => (
    //                       <Link
    //                         key={index}
    //                         href={child.href}
    //                         className={cn(
    //                           buttonVariants({
    //                             variant:
    //                               child.href === pathName ? "outline" : "ghost",
    //                             size: "sm",
    //                           }),
    //                           child.variant === "outline" &&
    //                             "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
    //                           "justify-start"
    //                         )}
    //                       >
    //                         {/* <child.icon className="mr-2 h-4 w-4" /> */}
    //                         {child.title}
    //                       </Link>
    //                     ))}
    //                   </div>
    //                 </Accordion.Content>
    //               </Accordion>

    //               {/* <div className="ml-4">
    //                 {link?.children.map((child: any, index: any) => (
    //                   <Link
    //                     key={index}
    //                     href={child.href}
    //                     className={cn(
    //                       buttonVariants({
    //                         variant:
    //                           child.href === pathName ? "outline" : "ghost",
    //                         size: "sm",
    //                       }),
    //                       child.variant === "outline" &&
    //                         "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
    //                       "justify-start"
    //                     )}
    //                   >
    //                     <child.icon className="mr-2 h-4 w-4" />
    //                     {child.title}
    //                   </Link>
    //                 ))}
    //               </div> */
    //               <button
    //                 onClick={() => toggleAccordion(index)}
    //                 className={cn(
    //                   "flex items-center cursor-pointer",
    //                   link.variant === "outline" &&
    //                     "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
    //                   "justify-start"
    //                 )}
    //               >
    //                 <link.icon className="mr-2 h-4 w-4" />
    //                 {link.title}
    //               </button>
    //               }
    //             </div>
    //           ) : (
    //             <div>
    //               <Link
    //                 key={index}
    //                 href={link.href}
    //                 className={cn(
    //                   buttonVariants({
    //                     variant: link.href === pathName ? "outline" : "ghost",
    //                     size: "sm",
    //                   }),
    //                   link.variant === "outline" &&
    //                     "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
    //                   "justify-start"
    //                 )}
    //               >
    //                 <link.icon className="mr-2 h-4 w-4" />
    //                 {link.title}
    //               </Link>
    //             </div>
    //           )}
    //         </div>
    //       ))}
    //     </nav>
    //   </div>
    // </TooltipProvider>

    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-2 py-4 data-[collapsed=true]:py-1"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col">
              {link.children ? (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full ml-3 text-sm"
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger
                      className={cn(
                        "flex items-center cursor-pointer",
                        link.variant === "outline" &&
                          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                        "justify-start"
                      )}
                    >
                      <span>
                        <link.icon className="mr-2 h-4 w-4" />
                      </span>
                      {link.title}
                    </AccordionTrigger>
                    <AccordionContent className="ml-4 w-full">
                      {link.children.map((child: any, index: any) => (
                        <Link
                          key={index}
                          href={child.href}
                          className={cn(
                            buttonVariants({
                              variant:
                                child.href === pathName ? "outline" : "ghost",
                              size: "sm",
                            }),
                            "justify-start w-full rounded-r-xl"
                          )}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({
                      variant: link.href === pathName ? "outline" : "ghost",
                      size: "sm",
                    }),
                    link.variant === "outline" &&
                      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                    "justify-start"
                  )}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </TooltipProvider>
  );
}
