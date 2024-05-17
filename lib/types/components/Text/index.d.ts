import { VariantProps } from "class-variance-authority";
import { PolymorphicComponentPropsWithRef } from "../../utils/types";
import React from "react";
declare const textStyles: (props?: {
    variant?: "link";
    color?: "light" | "primary" | "secondary";
    size?: "sm" | "lg" | "base" | "xl" | "2xl" | "4xl" | "5xl";
    weight?: "bold" | "thin" | "normal" | "semibold";
    align?: "left" | "center" | "right";
    underline?: boolean;
} & import("class-variance-authority/types").ClassProp) => string;
type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, VariantProps<typeof textStyles>>;
type TextComponent = <C extends React.ElementType = "span">(props: TextProps<C>) => React.ReactElement | null;
export declare const Text: TextComponent;
export {};
