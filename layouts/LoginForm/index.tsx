import {
  Button,
  Gradient,
  Input,
  Password,
  Socials,
  Text,
} from "../../components";
import { Box } from "../Box";
import { Row } from "../Row";
import { Stack } from "../Stack";

export const LoginForm = () => {
  return (
    <Box className="shadow-inner min-h-screen min-w-fit max-w-96 w-4/12 flex flex-col items-start bg-primary-50/15">
      <Gradient />
      <Stack className="p-8">
        <Text as="h2" size="4xl" weight="bold" className="mb-8">
          Log in
        </Text>
        <Text as="label" weight="semibold" className="mb-1">
          username
        </Text>
        <Input type="text" placeholder="username" className="mb-4" />
        <Row className="mb-1">
          <Text as="label" weight="semibold">
            password
          </Text>
          <Text as="a" variant="link" color="light">
            forgot password?
          </Text>
        </Row>
        <Password placeholder="password" className="mb-4" />
        <Button type="submit" variant="solid" width="third">
          Sign in
        </Button>
      </Stack>
      <Socials className="mt-auto self-center justify-self-end p-8" />
    </Box>
  );
};
