import React from "react";
import Box from "../Box";
import Row from "../Row";
import Blank from "../icons/blank";

interface IconProps {
  type: string;
  className?: string;
  href?: string; // Optional href prop
  noHoverEffect?: boolean; // Optional prop to control hover effect
}

const Icon: React.FC<IconProps> = ({
  type,
  className,
  href,
  noHoverEffect,
}) => {
  // Use a fallback icon component in case the requested icon is not found
  let IconComponent;

  try {
    IconComponent = require(`../icons/${type}`).default;
  } catch (error) {
    IconComponent = Blank;
  }

  const iconElement = <IconComponent className={`icon ${className}`} />;

  return (
    <Box
      className={`Icon ${className} ${noHoverEffect ? "" : "hover:opacity-60"}`}
    >
      <Row className="flex items-center">
        {href ? (
          <a href={href} className="flex items-center">
            {iconElement}
          </a>
        ) : (
          iconElement
        )}
      </Row>
    </Box>
  );
};

export default Icon;
