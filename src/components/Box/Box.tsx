import { ComponentPropsWithRef, forwardRef } from "react";

export type BoxProps = ComponentPropsWithRef<"div">;

const Box = forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});

export default Box;
