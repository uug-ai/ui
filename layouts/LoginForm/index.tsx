import { Button, Input, Text } from "../../components";
import { Box } from "../Box";
import { Row } from "../Row";
import { Stack } from "../Stack";

export const LoginForm = () => {
  return (
    <Box className="p-8 w-96">
      <Stack className="w-96">
        <Text as="h2" size="4xl" weight="bold" className="mb-6">
          Log in
        </Text>
        <Text as="label">username</Text>
        <Input type="text" placeholder="username" className="mb-4" />
        <Row>
          <Text as="label">password</Text>
          <Text as="a" color="light" underline align="right">
            forgot password?
          </Text>
        </Row>
        <Input type="password" placeholder="password" className="mb-4" />
        <Button type="submit" variant="solid">
          Sign in
        </Button>
      </Stack>
    </Box>
  );
};
