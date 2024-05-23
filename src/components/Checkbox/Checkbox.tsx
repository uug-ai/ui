import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const CheckboxStyles = cva(["hover:cursor-pointer"], {
  variants: {
    size: {
      sm: "w-2 h-2",
      md: "w-4 h-4",
      lg: "w-6 h-6",
    },
    color: {
      primary: "accent-primary-950",
      secondary: "accent-primary-50",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

type CheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof CheckboxStyles>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size, color, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        {...props}
        className={cn(CheckboxStyles({ className, size, color }), className)}
      />
    );
  }
);

export default Checkbox;
