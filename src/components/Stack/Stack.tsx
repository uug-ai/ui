import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";
import Box, { BoxProps } from "../Box/Box";

("border-2 rounded-lg border-box");

const StackStyles = cva([], {
  variants: {
    border: {
      none: "",
      "2": "border-2",
      "4": "border-4",
      "8": "border-8",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    color: {
      primary: "border-primary-950",
      light: "border-primary-950/[.05]",
    },
    borderBox: {
      true: "border-box",
    },
  },

  defaultVariants: {
    border: "none",
    rounded: "none",
    borderBox: false,
  },
});

type StackProps = BoxProps & VariantProps<typeof StackStyles>;

const Stack = ({
  border,
  rounded,
  borderBox,
  color,
  className,
  ...props
}: StackProps) => {
  return (
    <Box
      className={cn(
        "flex flex-col items-start w-full h-full",
        border,
        rounded,
        borderBox,
        color,
        className
      )}
      {...props}
    />
  );
};

export default Stack;
