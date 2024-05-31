import { cn } from "../../utils";
import Box, { BoxProps } from "../Box/Box";

type RowProps = BoxProps;

const Row = ({ className, ...props }: RowProps) => {
  return (
    <Box
      className={cn("p-4 gap-4 flex flex-row w-full", className)}
      {...props}
    />
  );
};

export default Row;
