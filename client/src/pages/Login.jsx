import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaPhoneAlt } from "react-icons/fa";
import { Progress } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AddAuth } from "../Store/AuthSlice";
import { useDispatch } from "react-redux";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const Nav = useNavigate();
  const toast = useToast()
  const [ValueProgress,setValueProgress] = useState(0)
  const [showPassword, setShowPassword] = useState(false);
  const [toggle, settoggle] = useState(true);
  const [errmessage,seterrmessage] = useState(null)
  const [popinfo,setpopInfo] = useState(null)
  const [signup, setsignup] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
  });
  let name, value;
  const dispatch = useDispatch()
  const handleShowClick = () => setShowPassword(!showPassword);
  const HandleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setsignup({ ...signup, [name]: value });
    // console.table(signup);
    if(signup.username !=="" ){
setValueProgress(()=>ValueProgress+25)
    }
    else if(signup.email!=="" ){
      setValueProgress(()=>ValueProgress+25)


    }
    else if(signup.password !==""){
      setValueProgress(()=>ValueProgress+25)


    }
    else {
      setValueProgress(()=>ValueProgress+25)
      
    }
  };

  const handleClickSignUp = async (e) => {
    e.preventDefault();
    console.log(true);
    seterrmessage(null);
  
    const { username, mobile, email, password } = signup;
    try {
      if (username !== "" || mobile !== "" || email !== "" || password !== "") {
        seterrmessage(null);
        const callServer = await fetch('http://localhost:8080/api/sign', {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Corrected content type
          },
          body: JSON.stringify({
            username,
            email,
            password,
            phone: mobile,
          }),
        });
        const res = await callServer.json();
        console.log(res);
        if(res.auth){
// seterrmessage(res.msg)
settoggle(!toggle)
return  toast({
  title: 'Account created.',
  description: "We've created your account for you.",
  status: 'success',
  duration: 3000,
  isClosable: true,
})
        }
        else {

        }
      } else {
        seterrmessage("Fill all fields....");
      }
    } catch (error) {
      console.log(error);
      seterrmessage("Something Went Wrong...");
    }
  };
  

const HandleSignIn = async()=>{
  const { username, mobile, email, password } = signup;
seterrmessage(null)
  try {
    const callServer = await fetch('http://localhost:8080/api/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected content type
      },
      body: JSON.stringify({
        
        email,
        password,
        
      }),
    });
    const res = await callServer.json();
    console.log(res);

if(res.auth){
  seterrmessage(res.message)
  localStorage.setItem('jwtToken', res.token);
  localStorage.setItem("username",res.username);

  dispatch(AddAuth(res.username));
  Nav("/")
  return  toast({
    title: 'Login Successful.',
    description: "Welcome to Mamaearth"+" "+`${res.username}`,
    status: 'success',
    duration: 3000,
    isClosable: true,
  })
}
else {
  seterrmessage(res.message)

}
  } catch (error) {
    seterrmessage("Something went wrong...")
  }
}


  return (
    <>
      <img
        onClick={() => Nav("/")}
        className="absolute w-96"
        src="https://image.slidesharecdn.com/mamaearth-210531051812/75/mamaearth-ppt-1-2048.jpg?cb=1665830660"
        alt=""
      />
     
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="white.200"
        // backgroundImage={"https://image.slidesharecdn.com/mamaearth-210531051812/75/mamaearth-ppt-1-2048.jpg?cb=1665830660"}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="green.500" />
          <Heading color="blue.400">{toggle ? "Welcome," : "Sign Up"}</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                {toggle ? (
                  ""
                ) : (
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input
                        name="username"
                        onChange={HandleChange}
                        value={signup.username}
                        type="text"
                        placeholder="Enter Your Username"
                      />
                    </InputGroup>
                  </FormControl>
                )}
                {toggle ? (
                  ""
                ) : (
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<FaPhoneAlt color="gray.300" />}
                      />
                      <Input
                        name="mobile"
                        onChange={HandleChange}
                        value={signup.mobile}
                        type="text"
                        placeholder="Enter Your Number"
                      />
                    </InputGroup>
                  </FormControl>
                )}

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      name="email"
                      onChange={HandleChange}
                      value={signup.email}
                      type="email"
                      placeholder="email address"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      name="password"
                      value={signup.password}
                      onChange={HandleChange}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                {toggle ? (
                  <Button
                    borderRadius={0}
                    // type="submit"
                    variant="solid"
                    colorScheme="facebook"
                    width="full"
                    onClick={HandleSignIn}
                  >
                    Sign In
                  </Button>
                ) : (
                  <Button
                    borderRadius={0}
                    // type="submit"
                    variant="solid"
                    colorScheme="facebook"
                    width="full"
                    onClick={handleClickSignUp}
                  >
                    Sign Up
                  </Button>
                )}
       <p
       className="font-bold text-red-800 text-center"
       >
       {
          null === seterrmessage ?(""):(errmessage)
        }
       </p>
                <Progress hasStripe value={ValueProgress} />
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          {toggle ? "New to us ?  " : "Already Register ?  "}
          <Link onClick={() => settoggle(!toggle)} color="teal.500">
            {toggle ? "Sign Up" : "Sign In"}
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
