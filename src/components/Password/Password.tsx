import { VariantProps } from "class-variance-authority";
import { forwardRef, useState } from "react";
import { cn } from "../../utils";
import { InputProps, InputStyles } from "../Input/Input";
import IconEye from "./eyeIcon";

// Add style to show/hide button in abosolute position on the right
// side of the input field.
const PasswordStyles = InputStyles;

type PasswordProps = InputProps & VariantProps<typeof PasswordStyles>;

const Password = forwardRef<HTMLInputElement, PasswordProps>(
  ({ className, ...props }: PasswordProps, ref) => {
    // State toggle for password visibility
    const [visible, setVisible] = useState(false);

    // Toggle password visibility
    const toggleVisibility = () => setVisible(!visible);

    return (
      <div className="relative w-full">
        <input
          type={visible ? "text" : "password"}
          className={cn(className)}
          ref={ref}
          {...props}
        />{" "}
        <button
          className="absolute right-2 top-2 z-10"
          onClick={toggleVisibility}
          aria-label="Toggle password visibility"
        >
          {visible ? (
            <IconEye className="opacity-10" />
          ) : (
            <IconEye className="opacity-60" />
          )}
        </button>
      </div>
    );
  }
);

export default Password;
