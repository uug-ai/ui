import { cn } from "../../utils";
import Box, { BoxProps } from "../Box/Box";

type NavigationItemProps = BoxProps;

const NavigationItem = ({ className, ...props }: NavigationItemProps) => {
  return <Box className={cn("flex flex-row  w-full", className)} {...props} />;
};

export default NavigationItem;
