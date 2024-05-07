import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const textStyles = cva(/* Add base text styling here*/ "max-w-32 text-wrap", {
  variants: {
    color: {
      primary: "text-red-500",
      secondary: "text-primary-50/[.09]",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      semibold: "font-semibold",
    },
    align: {
      left: "text-left",
      centert: "text-center",
      right: "text-right",
    },
    underline: {
      true: "underline",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "base",
    align: "left",
    weight: "normal",
  },
});

type TextProps = ComponentProps<"span"> & VariantProps<typeof textStyles>;

// export const Text = forwardRef<HTMLSpanElement, TextProps>(
//   ({ ...props }, ref) => {
//     return <span ref={ref} {...props} />;
//   }
// );

export const Text = ({ ...props }: TextProps) => {
  return <span {...props} />;
};
