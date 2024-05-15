import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";
import IconGithub from "./github";
import IconLinkedinSquare from "./linkedin";
import IconYoutube from "./youtube";

const SocialsStyles = cva(["space-x-2", "flex", "flex-row", "min-w-fit"], {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    color: {
      primary: "text-primary-950",
      secondary: "text-primary-50",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

type SocialsProps = ComponentProps<"div"> & VariantProps<typeof SocialsStyles>;

export const Socials = forwardRef<HTMLDivElement, SocialsProps>(
  ({ className, size, color, ...props }: SocialsProps, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(SocialsStyles({ className, size, color }), className)}
      >
        <a href="https://github.com/uug-ai" className="hover:opacity-75">
          <IconGithub />
        </a>

        <a href="https://youtube.com/uug-ai" className="hover:opacity-75">
          <IconYoutube />
        </a>

        <a
          href="https://www.linkedin.com/company/uug-ai"
          className="hover:opacity-75"
        >
          <IconLinkedinSquare />
        </a>
      </div>
    );
  }
);
