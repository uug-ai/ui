import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
export declare const InputStyles: (props?: import("class-variance-authority/types").ClassProp) => string;
export type InputProps = ComponentProps<"input"> & VariantProps<typeof InputStyles>;
export declare const Input: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
