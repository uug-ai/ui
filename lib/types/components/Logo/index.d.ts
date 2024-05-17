import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
declare const LogoStyles: (props?: {
    variant?: "white" | "black";
    size?: "sm" | "md" | "lg";
    colorscheme?: "primary" | "secondary";
} & import("class-variance-authority/types").ClassProp) => string;
type LogoProps = ComponentProps<"div"> & VariantProps<typeof LogoStyles>;
export declare const Logo: import("react").ForwardRefExoticComponent<Omit<LogoProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export {};
