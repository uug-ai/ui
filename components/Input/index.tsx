import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const InputStyles = cva([
  "peer",
  "h-full",
  "w-full",
  "rounded-[7px]",
  "border",
  "border-blue-gray-200",
  "border-t-transparent",
  "bg-transparent",
  "px-3",
  "py-2.5",
  "font-sans",
  "text-sm",
  "font-normal",
  "text-blue-gray-700",
  "outline",
  "outline-0",
  "transition-all",
  "placeholder-shown:border",
  "placeholder-shown:border-blue-gray-200",
  "placeholder-shown:border-t-blue-gray-200",
  "focus:border-2",
  "focus:border-gray-900",
  "focus:border-t-transparent",
  "focus:outline-0",
  "disabled:border-0",
  "disabled:bg-blue-gray-50",
  "placeholder:opacity-0",
  "focus:placeholder:opacity-100",
]);

type InputProps = ComponentProps<"input"> & VariantProps<typeof InputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }: InputProps, ref) => {
    return (
      <input
        type="text"
        ref={ref}
        className={cn(InputStyles(), className)}
        {...props}
      />
    );
  }
);
