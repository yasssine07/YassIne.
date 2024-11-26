import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define button variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold transition-colors", // Updated to a modern, sleek design
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-dark border-2 border-transparent hover:border-primary transition-all",
        outline:
          "bg-transparent text-primary border-2 border-primary hover:bg-primary-light hover:text-white transition-all",
        ghost:
          "bg-transparent text-primary hover:bg-primary-light hover:text-white border-2 border-transparent transition-all",
        // Additional variants can be added as needed
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-8 px-4 py-2 text-sm",
        lg: "h-12 px-8 py-3",
        icon: "h-10 w-10 p-2", // Icon buttons
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
