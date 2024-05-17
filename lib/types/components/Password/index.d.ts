/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
import { InputProps } from "../Input";
declare const PasswordStyles: (props?: import("class-variance-authority/types").ClassProp) => string;
type PasswordProps = InputProps & VariantProps<typeof PasswordStyles>;
export declare const Password: import("react").ForwardRefExoticComponent<Omit<PasswordProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export {};
