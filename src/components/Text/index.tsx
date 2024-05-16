import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../../utils/types";

const textStyles = cva(
  /* Add base text styling here*/ "max-w-prose text-wrap",
  {
    variants: {
      variant: {
        link: "underline hover:cursor-pointer hover:text-primary-950/[.8]",
      },
      color: {
        primary: "text-primary-950/[.9]",
        secondary: "text-primary-50/[.9]",
        light: "text-primary-950/[.5]",
      },
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
      },
      weight: {
        thin: "font-thin",
        normal: "font-normal",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      underline: {
        true: "underline",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        color: "light",
      },
    ],
    defaultVariants: {
      color: "primary",
      size: "base",
      align: "left",
      weight: "normal",
    },
  }
);

// type TextProps = ComponentProps<"span"> & VariantProps<typeof textStyles>;

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textStyles>
>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      color,
      size,
      align,
      weight,
      underline,
      variant,
      className,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";
    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            color,
            size,
            align,
            weight,
            underline,
            variant,
            className,
          })
        )}
        {...props}
      />
    );
  }
);
