import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

export const InputStyles = cva([
  "h-full",
  "w-full",
  "rounded-[5px]",
  "border",
  "border-primary-950/10",
  "bg-transparent",
  "px-3",
  "py-2.5",
  "text-sm",
  "font-normal",
  "text-primary-950",
  "transition-all",
  "placeholder-shown:border",
  "disabled:border-0",
  "placeholder:opacity-0",
  "focus:placeholder:opacity-100",
]);

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof InputStyles>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }: InputProps, ref) => {
    return (
      <input
        type={props.type || "text"}
        ref={ref}
        className={cn(InputStyles({ className }))}
        {...props}
      />
    );
  }
);

export default Input;
