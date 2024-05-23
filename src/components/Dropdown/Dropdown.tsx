import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const DropdownStyles = cva(["hover:cursor-pointer"], {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    color: {
      primary: "text-primary-950",
      secondary: "text-primary-50",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type Option = { value: string; label: string };

type DropdownProps = { options: Option[] } & ComponentProps<"select"> &
  VariantProps<typeof DropdownStyles>;

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ className, size, color, options, ...props }, ref) => {
    return (
      <select
        ref={ref}
        {...props}
        className={cn(DropdownStyles({ className, size, color }), className)}
      >
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export default Dropdown;
