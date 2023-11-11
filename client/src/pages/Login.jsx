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
import TopNavbar from "../components/Navbar/TopNavbar";

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
        const callServer = await fetch('https://manaearth.vercel.app/api/sign', {
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
    const callServer = await fetch('https://manaearth.vercel.app/api/login', {
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
       
        className="absolute object-fill"
        style={{width:"100%"}}
        src="https://cdn.pixabay.com/photo/2017/02/13/09/13/drops-of-milk-2062100_1280.jpg"
        alt=""
      />
     

 
      <Flex
   
    
      >
        <Stack
          flexDir="column"
         
          justifyContent="center"
          alignItems="center"
        >
          {/* <Avatar className="absolute" bg="black.500" /> */}
          <Box minW={{ base: "", md: "" }}>
          {/* <Heading className="" color="white.400">{toggle ? "Welcome,Sign In" : "Sign Up"}</Heading> */}
            
            <form
            
            className="w-3/12 absolute p-12 bg-white my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75"
            >
              
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor=""
                boxShadow="md"
              >
          <Heading className="text-sm" fontSize={"20"} color="blackAlpha.600">{toggle ? "Welcome,Sign In" : "Sign Up"}</Heading>



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
                  <FormHelperText color={"blackAlpha.600"} textAlign="right">
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
              <Box color={"blackAlpha.600"}>
          {toggle ? "New to us ?  " : "Already Register ?  "}
          <Link color={"blackAlpha.600"} onClick={() => settoggle(!toggle)} >
            {toggle ? "Sign Up" : "Sign In"}
          </Link>
        </Box>
            </form>
          </Box>
        </Stack>
       
      </Flex>
    </>
  );
};

export default Login;
