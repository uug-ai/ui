import Button from "../../components/Button";
import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import Password from "../../components/Password";
import Socials from "../../components/Socials";
//import Text from "../../components/Text";
import { Box } from "../Box";
import { Row } from "../Row";
import { Stack } from "../Stack";

export const LoginForm = () => {
  return (
    <Box className="shadow-inner min-h-screen min-w-fit max-w-96 w-4/12 flex flex-col items-start bg-primary-50/15">
      <Gradient />
      <Stack className="p-8">
        <Input
          type="text"
          id="username"
          placeholder="username"
          className="mb-4"
        />
        <Row className="mb-1"></Row>
        <Password placeholder="password" id="username" className="mb-4" />
        <Button type="submit" variant="solid" width="third">
          Sign in
        </Button>
      </Stack>
      <Socials className="mt-auto self-center justify-self-end p-8" />
    </Box>
  );
};
