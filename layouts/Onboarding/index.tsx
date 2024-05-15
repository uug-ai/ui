import { Button, Input, Text } from "../../components";
import { Box } from "../Box";
import { Row } from "../Row";
import { Stack } from "../Stack";

export const Onboarding = () => {
  return (
    <Box>
      <Row>
        <Box className="px-8 py-12 border border-gray-300 rounded-xl">
          <Stack>
            <Text
              as="h2"
              weight={"bold"}
              align={"center"}
              size={"2xl"}
              className="mb-2"
            >
              Register
            </Text>

            <Text as="span" size={"sm"} align={"center"} className="mb-8">
              Enter details below for registration
            </Text>

            <Text
              as="label"
              htmlFor="firstName"
              size={"sm"}
              weight={"normal"}
              className="mb-1.5"
            >
              First Name
            </Text>
            <Input
              type="text"
              id="First Name"
              placeholder="First Name"
              className="mb-4"
            />
            <Text
              as="label"
              htmlFor="lastName"
              size={"sm"}
              weight={"normal"}
              className="mb-1.5"
            >
              Last Name
            </Text>
            <Input
              type="text"
              id="Last Name"
              placeholder="Last Name"
              className="mb-4"
            />

            <Text
              as="label"
              htmlFor="e-mail"
              size={"sm"}
              weight={"normal"}
              className="mb-1.5"
            >
              E-mail
            </Text>
            <Input
              type="text"
              id="e-mail"
              placeholder="E-mail"
              className="mb-4"
            />
            <Text
              as="label"
              htmlFor="phoneNumber"
              size={"sm"}
              weight={"normal"}
              className="mb-1.5"
            >
              Phone Number
            </Text>
            <Input
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              className="mb-4"
            />
            <Text
              as="label"
              htmlFor="dateOfBirth"
              size={"sm"}
              weight={"normal"}
              className="mb-1.5"
            >
              Date Of Birth
            </Text>
            <Input
              type="date"
              id="dateOfBirth"
              placeholder="Phone Number"
              className="mb-4"
            />
            <Button type="submit" variant={"solid"} className="mt-10">
              Register
            </Button>
          </Stack>
        </Box>
        <Button type="submit" variant={"solid"} className="mt-10">
          Register
        </Button>
      </Row>
      <Box p-8>
        <Text as="p" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus
          cupiditate voluptatem laboriosam fuga laudantium, nemo corporis
          provident veniam maiores nostrum dolores obcaecati sit asperiores
          aperiam enim hic sed quasi recusandae dolore aut iste ea sequi
          voluptas? Incidunt, dolore tempore!
        </Text>
        <Row>
          <Text as="p" size="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus
            cupiditate voluptatem laboriosam.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum minus cupiditate voluptatem
            laboriosam.
          </Text>
          <Text as="p" size="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus
            cupiditate voluptatem laboriosam.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum minus cupiditate voluptatem
            laboriosam.
          </Text>
        </Row>
      </Box>
    </Box>
  );
};
