import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
declare const ButtonStyles: (props?: {
    variant?: "solid" | "outline" | "light";
    size?: "sm" | "md" | "lg";
    width?: "full" | "third";
    colorscheme?: "primary" | "secondary";
} & import("class-variance-authority/types").ClassProp) => string;
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof ButtonStyles>;
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export {};
