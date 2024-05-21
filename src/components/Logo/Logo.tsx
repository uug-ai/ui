// const LogoStyles = cva(
//   [
//     "p-5",
//     "text-lg",
//     "rounded-lg",
//     "hover:cursor-pointer",
//     "focus:outline-none",
//   ],
//   {
//     variants: {
//       variant: {
//         white: "",
//         black: "",
//       },
//       size: {
//         sm: "px-4 py-2 text-sm",
//         md: "px-4 py-2 text-md",
//         lg: "px-6 py-3 text-lg",
//       },
//       colorscheme: {
//         primary: "bg-primary-950 text-primary-50",
//         secondary: "bg-primary-50 text-primary-950",
//       },
//     },
//     compoundVariants: [
//       {
//         variant: "white",
//         colorscheme: "primary",
//         className: "bg-primary-950 hover:bg-primary-900",
//       },
//       {
//         variant: "black",
//         colorscheme: "primary",
//         className:
//           "text-primary-950 border-primary-950 bg-transparent hover:bg-primary-50",
//       },
//     ],
//     defaultVariants: {
//       variant: "white",
//     },
//   }
// );

import LogoIcon from "../icons/logo";

// type LogoProps = ComponentProps<"div"> & VariantProps<typeof LogoStyles>;

// const Logo = forwardRef<HTMLButtonElement, LogoProps>(
//   ({ variant, size, colorscheme, className, ...props }) => {
//     return (
//       <div
//         className={cn(LogoStyles({ variant, size, colorscheme, className }))}
//         {...props}
//       />
//     );
//   }
// );

// export default Logo;

const index = () => {
  return <LogoIcon />;
};

export default index;
