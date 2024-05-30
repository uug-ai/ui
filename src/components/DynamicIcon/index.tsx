import React, { Suspense } from "react";
import Box from "../Box";
import Row from "../Row";
import Blank from "../icons/blank";

interface IconProps {
  type: string;
  className: string;
}

const Icon: React.FC<IconProps> = ({ type, className }) => {
  // Use a fallback icon component in case the requested icon is not found
  const FallbackIcon = Blank;

  const LazyIcon = React.lazy(() =>
    import(`../icons/${type}`).catch(() => ({
      default: FallbackIcon,
    }))
  );

  return (
    <Box className="Icon">
      <Row>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyIcon />
        </Suspense>
      </Row>
    </Box>
  );
};

export default Icon;
