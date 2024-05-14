import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { Input } from "../Input";

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
      <div>
        <Input type={visible ? "text" : "password"} />{" "}
        <span onClick={toggleVisibility}>{visible ? "Hide" : "Show"}</span>
      </div>
    );
  }
);
