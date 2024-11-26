"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Trigger to open the menu */}
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* Sheet content */}
      <SheetContent className="p-4 bg-gray-900 text-gray-100">
        {/* Accessible Title */}
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
{/* Logo Section */}
<div className="mt-32 mb-32 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              YassIne <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Navigation links */}
        <nav className="flex flex-col justify-center items-center gap-8 ">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-xl capitalize font-medium transition-all 
                ${ pathname === link.path ? "text-accent font-bold" : "text-gray-300 hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
