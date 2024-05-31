import React from "react";
import Box from "../Box";
import Icon from "../DynamicIcon";
import Row from "../Row";
import Text from "../Text";

// The props with a "?" are optional
interface NavItemProps {
  title: string;
  type: string;
  className?: string;
  href?: string;
}

// This will export between a non-clickable and clickable NavItem based on if the "href" prop is present
const NavItem: React.FC<NavItemProps> = ({ title, type, className, href }) => {
  const content = (
    <div className="flex items-center group">
      <Icon type={type} noHoverEffect />
      <Text className={`ml-2 pr-10 font-bold ${className}`}>{title}</Text>
    </div>
  );

  return (
    <Box className={`ml-5 pt-5 ${className} hover:opacity-60`}>
      <Row className="flex items-center">
        {href ? (
          <a href={href} className="flex items-center group-hover:opacity-100">
            {content}
          </a>
        ) : (
          <div className="group-hover:opacity-100">{content}</div>
        )}
      </Row>
    </Box>
  );
};

export default NavItem;
