import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
declare const SocialsStyles: (props?: {
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary";
} & import("class-variance-authority/types").ClassProp) => string;
type SocialsProps = ComponentProps<"div"> & VariantProps<typeof SocialsStyles>;
export declare const Socials: import("react").ForwardRefExoticComponent<Omit<SocialsProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
