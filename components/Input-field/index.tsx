import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const InputFieldStyles = cva(
  [
    "w-40",
    "h-10",
    "rounded-lg",
    "text-lg",
    "focus:outline-none",
    "hover:cursor-pointer",
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
      colorscheme: {
        primary: "bg-blue-950 text-blue-50",
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
        colorscheme: "primary",
        className: "text-primary-950 bg-primary-50 hover:bg-primary-300",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type InputFieldProps = ComponentProps<"input"> &
  VariantProps<typeof InputFieldStyles>;

export const InputField = ({
  variant,
  size,
  colorscheme,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <input
      type="text"
      className={InputFieldStyles({ variant, size, colorscheme, className })}
      {...props}
      placeholder="Input"
    />
  );
};
