import { cn } from "../../utils";
import Box, { BoxProps } from "../Box/Box";

type StackProps = BoxProps;

const Stack = ({ className, ...props }: StackProps) => {
  return (
    <Box
      className={cn("flex flex-col items-start w-full h-full", className)}
      {...props}
    />
  );
};

export default Stack;
