import React from "react";
import Box from "../Box";
import Icon from "../DynamicIcon";
import Row from "../Row";
import Text from "../Text";

interface NavItemProps {
  title: string;
  type: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, type }) => {
  return (
    <Box className="ml-5">
      <Row className="pt-6">
        <Icon type={type} className={"className"} />
        <Text className="pl-2 pr-10" weight="bold">
          {title}
        </Text>
      </Row>
    </Box>
  );
};

export default NavItem;
