import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { Input } from "../Input";

// Add style to show/hide button in abosolute position on the right
// side of the input field.
const PasswordStyles = cva([]);

type PasswordProps = ComponentProps<"input"> &
  VariantProps<typeof PasswordStyles>;

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
  ({ className, ...props }: PasswordProps, ref) => {
    // State toggle for password visibility
    const [visible, setVisible] = useState(false);

    // Toggle password visibility
    const toggleVisibility = () => setVisible(!visible);

    return (
      <div style={{ position: "relative" }}>
        <Input type={visible ? "text" : "password"} />{" "}
        <span
          style={{ position: "absolute", right: "5%", top: "18%", zIndex: 999 }}
          onClick={toggleVisibility}
        >
          {visible ? "Hide" : "Show"}
        </span>
      </div>
    );
  }
);
