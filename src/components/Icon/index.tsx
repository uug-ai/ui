import React, { Suspense } from "react";
import Box from "../Box";
import Row from "../Row";

// This defines the structure of props that component expects to receive

interface IconProps {
  type: string;
}

// This dynamicallyimports an icon component using the (reacts) lazy function.
// Meaning it will happen asynchronously, which can improve performance by splitting the code into smaller chunks.

const Icon: React.FC<IconProps> = ({ type }) => {
  const IconComponent = React.lazy(() => import(`../icons/${type}`));

  // The suspense component is used to handle the asynchornous loading of the icon component

  return (
    <Box className="Icon">
      <Row>
        <Suspense fallback={<div>Loading...</div>}>
          <IconComponent />
        </Suspense>
      </Row>
    </Box>
  );
};

export default Icon;
