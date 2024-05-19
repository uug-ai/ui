import { cn } from "../../utils";
import Box, { BoxProps } from "../Box/Box";

type RowProps = BoxProps;

const Row = ({ className, ...props }: RowProps) => {
  return (
    <Box
      className={cn("flex flex-row justify-between w-full", className)}
      {...props}
    />
  );
};

export default Row;
