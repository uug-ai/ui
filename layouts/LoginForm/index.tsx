import { Button, Input, Text } from "../../components";
import { Box } from "../Box";
import { Row } from "../Row";
import { Stack } from "../Stack";

export const LoginForm = () => {
  return (
    <Box className="border-r-2 min-h-screen p-8 w-4/12">
      <Stack>
        <Text as="h2" size="4xl" weight="bold" className="mb-8">
          Log in
        </Text>
        <Text as="label" weight="semibold">
          username
        </Text>
        <Input type="text" placeholder="username" className="mb-4" />
        <Row>
          <Text as="label" weight="semibold">
            password
          </Text>
          <Text as="a" variant="link">
            forgot password?
          </Text>
        </Row>
        <Input type="password" placeholder="password" className="mb-4" />
        <Button type="submit" variant="solid" className="w-4/12">
          Sign in
        </Button>
      </Stack>
    </Box>
  );
};
