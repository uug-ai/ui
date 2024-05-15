import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const ButtonStyles = cva(
  [
    "p-5",
    "text-lg",
    "rounded-lg",
    "hover:cursor-pointer",
    "focus:outline-none",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        light: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-3 text-lg",
      },
      width: {
        full: "w-full",
        third: "min-w-1/3",
      },
      colorscheme: {
        primary: "bg-primary-950 text-primary-50",
        secondary: "bg-primary-50 text-primary-950",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-950 hover:bg-primary-900",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-950 border-primary-950 bg-transparent hover:bg-primary-50",
      },
      {
        variant: "light",
        colorscheme: "secondary",
        className: "hover:bg-primary-300",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof ButtonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, width, className, ...props }) => {
    return (
      <button
        className={cn(
          ButtonStyles({ variant, size, colorscheme, width, className })
        )}
        {...props}
      />
    );
  }
);
