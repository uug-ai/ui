import { Button, Input, Socials, Text } from "../../components";
import { Box } from "../Box";
import { Row } from "../Row";
import { Stack } from "../Stack";

export const LoginForm = () => {
  return (
    <Box className="border-r-2 min-h-screen p-8 w-4/12 flex flex-col items-start bg-primary-50/15">
      <Stack>
        <Text as="h2" size="4xl" weight="bold" className="mb-8">
          Log in
        </Text>
        <Text as="label" weight="semibold">
          username
        </Text>
        <Input type="text" placeholder="username" className="mb-4" />
        <Row className="mb-1">
          <Text as="label" weight="semibold">
            password
          </Text>
          <Text as="a" variant="link">
            forgot password?
          </Text>
        </Row>
        <Input type="password" placeholder="password" className="mb-4" />
        <Button type="submit" variant="solid" width="third">
          Sign in
        </Button>
      </Stack>
      <Socials className="mt-auto self-center justify-self-end" />
    </Box>
  );
};
