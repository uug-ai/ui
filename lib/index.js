import * as react from 'react';
import react__default, { ComponentProps, ComponentPropsWithRef } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

declare const ButtonStyles: (props?: {
    variant?: "solid" | "outline" | "light";
    size?: "sm" | "md" | "lg";
    width?: "full" | "third";
    colorscheme?: "primary" | "secondary";
} & class_variance_authority_types.ClassProp) => string;
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof ButtonStyles>;
declare const Button: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

declare const Gradient: () => react.JSX.Element;

declare const InputStyles: (props?: class_variance_authority_types.ClassProp) => string;
type InputProps = ComponentProps<"input"> & VariantProps<typeof InputStyles>;
declare const Input: react.ForwardRefExoticComponent<Omit<InputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

declare const PasswordStyles: (props?: class_variance_authority_types.ClassProp) => string;
type PasswordProps = InputProps & VariantProps<typeof PasswordStyles>;
declare const Password: react.ForwardRefExoticComponent<Omit<PasswordProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

declare const SocialsStyles: (props?: {
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary";
} & class_variance_authority_types.ClassProp) => string;
type SocialsProps = ComponentProps<"div"> & VariantProps<typeof SocialsStyles>;
declare const Socials: react.ForwardRefExoticComponent<Omit<SocialsProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type PropsOf<C extends keyof JSX.IntrinsicElements | react__default.JSXElementConstructor<unknown>> = JSX.LibraryManagedAttributes<C, react__default.ComponentPropsWithoutRef<C>>;
type AsProp<C extends react__default.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: C;
};
/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;
/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
type InheritableElementProps<C extends react__default.ElementType, Props = {}> = ExtendableProps<PropsOf<C>, Props>;
/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
type PolymorphicComponentProps<C extends react__default.ElementType, Props = {}> = InheritableElementProps<C, Props & AsProp<C>>;
type PolymorphicRef<C extends react__default.ElementType> = react__default.ComponentPropsWithRef<C>["ref"];
type PolymorphicComponentPropsWithRef<C extends react__default.ElementType, Props = {}> = PolymorphicComponentProps<C, Props> & {
    ref?: PolymorphicRef<C>;
};

declare const textStyles: (props?: {
    variant?: "link";
    color?: "light" | "primary" | "secondary";
    size?: "sm" | "lg" | "base" | "xl" | "2xl" | "4xl" | "5xl";
    weight?: "bold" | "thin" | "normal" | "semibold";
    align?: "left" | "center" | "right";
    underline?: boolean;
} & class_variance_authority_types.ClassProp) => string;
type TextProps<C extends react__default.ElementType> = PolymorphicComponentPropsWithRef<C, VariantProps<typeof textStyles>>;
type TextComponent = <C extends react__default.ElementType = "span">(props: TextProps<C>) => react__default.ReactElement | null;
declare const Text: TextComponent;

type BoxProps = ComponentPropsWithRef<"div">;
declare const Box: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: react.Ref<HTMLDivElement>;
}, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const LoginForm: () => react.JSX.Element;

type RowProps = BoxProps;
declare const Row: ({ className, ...props }: RowProps) => react.JSX.Element;

type StackProps = BoxProps;
declare const Stack: ({ className, ...props }: StackProps) => react.JSX.Element;

export { Box, type BoxProps, Button, Gradient, Input, type InputProps, InputStyles, LoginForm, Password, Row, Socials, Stack, Text };
//# sourceMappingURL=index.js.map
