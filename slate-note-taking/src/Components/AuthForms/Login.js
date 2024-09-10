import { useLoginSignupContext } from "../../Context/IndexAllContext";
import { loginHandler } from "../../Services/AuthServices";
import {
  React,
  Link,
  useNavigate,
  useState,
  useEffect,
} from "../../Utils/CustomUtils";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";

function Login() {
  const { dispatch, email, password } = useLoginSignupContext();
  const navigate = useNavigate();
  const toast = useToast();

  const submitLoginData = (e) => {
    e.preventDefault();
    loginHandler(e, email, password, dispatch);
    navigate("/home");
  };

  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [email, password]);

  const setGuestLoginData = (e) => {
    e.preventDefault();
    const guestEmail = "6prankur@gmail.com";
    const guestPassword = "12345678";
    const guestName = `Guest`;
    dispatch({ type: "EMAIL", payload: guestEmail });
    dispatch({ type: "PASSWORD", payload: guestPassword });
    dispatch({ type: "NAME", payload: guestName });

    toast({
      title: "Guest Login",
      description: "You are now logged in as a guest.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg="gray.50"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Box bg="white" p={8} maxW="sm" borderRadius="lg" boxShadow="md" w="full">
        <Text fontSize="2xl" mb={4} textAlign="center" fontWeight="bold">
          Login
        </Text>
        <Text mb={6} color="gray.500" textAlign="center">
          Enter your email and password to login
        </Text>
        <form onSubmit={submitLoginData}>
          <VStack spacing={4} align="flex-start">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) =>
                  dispatch({ type: "PASSWORD", payload: e.target.value })
                }
              />
            </FormControl>
            {error && (
              <Text color="red.500" fontSize="sm">
                {error}
              </Text>
            )}
            <Button colorScheme="green" onClick={setGuestLoginData} w="full">
              Guest Login
            </Button>
            <Button
              type="submit"
              colorScheme="red"
              isDisabled={isDisabled}
              w="full"
            >
              Login
            </Button>
          </VStack>
        </form>
        <Text mt={6} fontSize="sm" color="gray.500" textAlign="center">
          Not a member?{" "}
          <Link to="/signup" style={{ color: "blue", fontWeight: "bold" }}>
            Sign up
          </Link>{" "}
          here
        </Text>
      </Box>
    </Box>
  );
}

export default Login;
