import React from "react";
import Box from "../../components/Box";
import Logo from "../../components/Logo";
import Stack from "../../components/Stack";

const Navigation: React.FC = () => {
  return (
    <Stack>
      <Box>
        <Logo />
      </Box>
    </Stack>
  );
};

export default Navigation;
