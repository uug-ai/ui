import { cn } from "../../utils";
import { Box, BoxProps } from "../Box";

type RowProps = BoxProps;

export const Row = ({ className, ...props }: RowProps) => {
  return (
    <Box className={cn("flex flex-row items-start", className)} {...props} />
  );
};
