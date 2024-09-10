import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Alert,
} from "@chakra-ui/react";
import { useLoginSignupContext } from "../../Context/IndexAllContext";
import { signUpHandler } from "../../Services/AuthServices";
import {
  Link,
  useNavigate,
  useState,
  useEffect,
} from "../../Utils/CustomUtils";

function Signup() {
  const { dispatch, name, number, email, password } = useLoginSignupContext();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [name, email, password]);

  function submitSignUpData(e) {
    e.preventDefault();
    signUpHandler(e, name, number, email, password);
    navigate("/Login");
  }

  return (
    <Container centerContent py={10}>
      <Box
        w="100%"
        maxW="400px"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
          Sign Up
        </Text>
        <Text fontSize="md" color="gray.600" textAlign="center" mb={6}>
          Create your account by entering your details
        </Text>

        {error && (
          <Alert status="error" mb={4} borderRadius="md">
            {error}
          </Alert>
        )}

        <form onSubmit={submitSignUpData}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  dispatch({ type: "NAME", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                minLength={6}
                value={password}
                onChange={(e) =>
                  dispatch({ type: "PASSWORD", payload: e.target.value })
                }
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="red"
              isFullWidth
              isDisabled={isDisabled}
            >
              Sign Up
            </Button>
          </VStack>
        </form>

        <Text fontSize="sm" color="gray.500" mt={4} textAlign="center">
          Already have an account?{" "}
          <Link to="/Login" style={{ color: "blue.500" }}>
            Login here
          </Link>
        </Text>
      </Box>
    </Container>
  );
}

export default Signup;
