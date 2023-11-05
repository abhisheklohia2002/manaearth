import {
  Container,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import React, { useRef ,useState,useEffect} from "react";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { BsCart3, BsArrowLeft } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import BottomNav from "./BottomNav";
import { useSelector } from "react-redux";
import DrawerCart from "../DrawerCart";
import { useNavigate } from "react-router-dom";
export default function TopNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const Nav = useNavigate()
  const [searchbar,setsearchbar] = useState(null);
 
  const selector = useSelector((state) => state.ProductSlice);
  const auth = useSelector((state) => state.AuthSlice);

  const arr = ["FaceWash", "Shampoo", "Medicine"];
  // console.log(auth[0].payload,"tobnar")



  const total = selector.reduce((acc, product) => {
    return acc + product.price * product.qty;
  }, 0);
  // console.log(total);

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [arr.length]);


  return (
    <>
      <Box
        position={"sticky"}
        pt={3}
        width={"auto"}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Box display={"flex"} alignContent={"center"} alignItems={"center"}>
          <Box display={"flex"} justifyContent={"left"}>
            <svg
              width="120"
              height="32"
              viewBox="0 0 116 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5763 20.908C16.7075 20.908 16.2819 20.0594 16.2819 18.717V14.7101C16.2819 13.3084 15.838 12.7953 14.8202 12.7953C13.8399 12.7953 13.5068 13.565 13.5068 14.6509V20.9069H12.2855C10.8607 20.9069 10.1022 20.4136 10.1022 18.7159V14.6095C10.1022 13.3263 9.63943 12.7931 8.71437 12.7931C7.73406 12.7931 7.34538 13.3261 7.34538 14.6671V20.908H6.12437C4.55161 20.908 3.83032 20.0988 3.83032 18.717V14.9074C3.83032 11.7491 5.53246 9.73587 8.77016 9.73587C10.3604 9.73587 11.5639 10.7831 11.8968 11.6703C12.3782 10.8416 13.6176 9.73532 15.079 9.73532C18.0396 9.73532 19.7959 11.6094 19.7959 15.0055V20.9083H18.5749L18.5763 20.908Z"
                fill="#00AEEF"
              ></path>
              <path
                d="M25.8484 21.2045C23.8875 21.2045 21.5005 20.2176 21.5005 17.7499C21.5005 15.3418 23.129 14.1181 26.829 14.1181H27.3287V13.664C27.3287 12.7757 26.6818 12.5588 25.2934 12.5588C23.3878 12.5588 22.6846 13.0323 21.9633 13.7439H21.8708V12.421C21.8708 11.0786 23.1846 9.73643 26.0891 9.73643C28.9015 9.73643 30.733 11.2563 30.733 14.4541V16.1319C30.733 20.0798 29.5489 21.2048 25.8484 21.2048V21.2045ZM27.4026 16.4475H26.6996C25.3676 16.4475 24.8312 16.8027 24.8312 17.5336C24.8312 18.2242 25.2385 18.5789 26.2188 18.5789C26.8479 18.5789 27.4026 18.2438 27.4026 17.2561V16.4475Z"
                fill="#00AEEF"
              ></path>
              <path
                d="M47.2746 20.908C45.4058 20.908 44.9802 20.0595 44.9802 18.717V14.7101C44.9802 13.3085 44.536 12.7953 43.5183 12.7953C42.5377 12.7953 42.2048 13.565 42.2048 14.6509V20.9069H40.9835C39.559 20.9069 38.8003 20.4136 38.8003 18.7159V14.6095C38.8003 13.3264 38.3375 12.7931 37.4124 12.7931C36.4321 12.7931 36.0434 13.3261 36.0434 14.6671V20.908H34.8224C33.2496 20.908 32.5281 20.0989 32.5281 18.717V14.9075C32.5281 11.7491 34.2302 9.7359 37.4679 9.7359C39.0582 9.7359 40.2617 10.7832 40.5946 11.6703C41.0754 10.8416 42.315 9.7359 43.7765 9.7359C46.7371 9.7359 48.4934 11.61 48.4934 15.0061V20.9083H47.2727L47.2746 20.908Z"
                fill="#00AEEF"
              ></path>
              <path
                d="M54.5466 21.2045C52.586 21.2045 50.199 20.2176 50.199 17.7499C50.199 15.3418 51.827 14.1181 55.5275 14.1181H56.0272V13.664C56.0272 12.7757 55.3803 12.5588 53.9919 12.5588C52.0863 12.5588 51.3833 13.0323 50.6618 13.7439H50.5696V12.421C50.5696 11.0786 51.8831 9.73643 54.7876 9.73643C57.6 9.73643 59.4318 11.2563 59.4318 14.4541V16.1319C59.4318 20.0798 58.2479 21.2048 54.5469 21.2048L54.5466 21.2045ZM56.1013 16.4475H55.3987C54.0666 16.4475 53.5299 16.8027 53.5299 17.5336C53.5299 18.2242 53.9372 18.5789 54.9175 18.5789C55.5466 18.5789 56.1019 18.2438 56.1019 17.2561V16.4469L56.1013 16.4475Z"
                fill="#00AEEF"
              ></path>
              <path
                d="M66.0006 16.822H64.4834C64.6871 17.9073 65.5192 18.4205 66.9815 18.4205C68.6095 18.4205 69.6267 18.1449 70.2006 17.7296H70.3299V18.598C70.3299 19.9801 69.2755 21.2236 66.3704 21.2236C62.8554 21.2236 61.0066 18.6966 61.0066 15.6968C61.0066 12.4004 63.0966 9.71632 66.2427 9.71632C68.9062 9.71632 70.9787 11.3148 70.9787 14.0785C70.9787 16.2502 69.4423 16.8223 66.0017 16.8223L66.0006 16.822ZM66.2424 12.5194C65.0025 12.5194 64.4845 13.368 64.3923 14.4144H65.7607C67.4265 14.4144 67.7227 14.1388 67.7227 13.6642C67.7227 13.1114 67.2599 12.5194 66.2427 12.5194"
                fill="#82C341"
              ></path>
              <path
                d="M76.7323 21.2045C74.7706 21.2045 72.3838 20.2176 72.3838 17.7499C72.3838 15.3418 74.0121 14.1181 77.712 14.1181H78.212V13.664C78.212 12.7757 77.5651 12.5588 76.1773 12.5588C74.2708 12.5588 73.5679 13.0323 72.846 13.7439H72.7541V12.421C72.7541 11.0786 74.0676 9.73643 76.9724 9.73643C79.7848 9.73643 81.6166 11.2563 81.6166 14.4541V16.1319C81.6166 20.0798 80.4322 21.2048 76.7325 21.2048L76.7323 21.2045ZM78.2867 16.4475H77.5835C76.2511 16.4475 75.7148 16.8027 75.7148 17.5336C75.7148 18.2242 76.1215 18.5789 77.1023 18.5789C77.7314 18.5789 78.2867 18.2438 78.2867 17.2561V16.4475Z"
                fill="#82C341"
              ></path>
              <path
                d="M89.6661 12.8548C89.272 12.6954 88.8497 12.6214 88.4262 12.6376C87.5747 12.6376 86.9087 13.0915 86.9087 14.4141V20.9085H85.947C84.4297 20.9085 83.5042 20.1581 83.5042 18.3422V13.6245C83.5042 11.4338 84.892 9.69647 87.2052 9.69647C88.9629 9.69647 89.7766 10.4662 89.7766 11.4732V12.8548H89.6661Z"
                fill="#82C341"
              ></path>
              <path
                d="M92.0528 8.13716C92.5652 7.68939 93.2107 7.432 93.8843 7.40683H94.2544V10.0526H97.2344V11.3754C97.2344 12.3031 96.3088 13.0136 95.5137 13.0136H94.2555V16.9405C94.2403 17.0947 94.2584 17.2504 94.3083 17.3967C94.3583 17.543 94.439 17.6764 94.5448 17.7874C94.6505 17.8984 94.7788 17.9844 94.9205 18.0393C95.0623 18.0942 95.214 18.1167 95.3652 18.1052C95.9057 18.1425 96.4477 18.0619 96.9555 17.8687H97.0479V19.3294C97.0479 20.2372 96.2708 21.0656 94.439 21.0656C92.6997 21.0656 90.8315 20.1774 90.8315 17.1963V10.4662C90.8468 10.0082 90.9649 9.55991 91.1767 9.15604C91.3885 8.75216 91.6884 8.40354 92.0531 8.13716"
                fill="#82C341"
              ></path>
              <path
                d="M107.465 20.9094C105.615 20.9094 105.3 19.9817 105.3 18.6393V15.0061C105.3 13.4666 104.782 12.7757 103.784 12.7757C102.414 12.7757 102.081 13.5455 102.081 15.0849V20.9094H100.897C99.2137 20.9094 98.5657 20.1589 98.5657 18.6393V6.30115H99.694C101.156 6.30115 101.989 7.0516 101.989 8.45273V11.2558C102.507 10.3874 103.358 9.7359 104.967 9.7359C107.021 9.7359 108.816 11.4336 108.816 14.3745V20.9094H107.465Z"
                fill="#82C341"
              ></path>
              <path
                d="M108.696 8.77074C108.696 8.32454 108.825 7.88836 109.067 7.51736C109.31 7.14635 109.654 6.85719 110.058 6.68644C110.461 6.51569 110.904 6.47101 111.332 6.55806C111.76 6.64511 112.154 6.85997 112.462 7.17549C112.771 7.491 112.981 7.89298 113.066 8.33061C113.151 8.76824 113.108 9.22185 112.941 9.63408C112.774 10.0463 112.491 10.3987 112.128 10.6466C111.765 10.8945 111.338 11.0268 110.902 11.0268C110.612 11.0268 110.325 10.9685 110.058 10.8552C109.79 10.7418 109.547 10.5757 109.342 10.3662C109.137 10.1566 108.974 9.90792 108.863 9.63417C108.753 9.36042 108.695 9.06702 108.696 8.77074V8.77074ZM109.12 8.77074C109.12 9.13109 109.225 9.48335 109.42 9.78297C109.616 10.0826 109.894 10.3161 110.22 10.454C110.546 10.5919 110.904 10.628 111.25 10.5577C111.595 10.4874 111.913 10.3139 112.162 10.0591C112.411 9.80426 112.581 9.47961 112.65 9.12619C112.718 8.77276 112.683 8.40642 112.548 8.0735C112.413 7.74058 112.185 7.45603 111.892 7.25583C111.599 7.05563 111.254 6.94877 110.902 6.94877C110.43 6.94921 109.977 7.14131 109.642 7.4829C109.308 7.82449 109.121 8.28766 109.12 8.77074ZM110.963 9.29437C110.881 9.11413 110.831 9.09732 110.655 9.08051V9.85659H110.397C110.347 9.8626 110.296 9.85758 110.248 9.84187C110.2 9.82616 110.155 9.80013 110.118 9.7655C110.08 9.73088 110.051 9.68846 110.03 9.6411C110.01 9.59374 110 9.54252 110.001 9.49087V7.78218C110.219 7.71906 110.445 7.68497 110.672 7.68076H110.915C111.382 7.68076 111.728 7.94505 111.728 8.34467C111.729 8.46159 111.697 8.57623 111.637 8.6756C111.576 8.77497 111.49 8.85509 111.387 8.90688C111.481 9.01251 111.559 9.13199 111.618 9.2613C111.772 9.55949 111.817 9.62702 111.932 9.69426C111.882 9.74983 111.821 9.7933 111.752 9.82152C111.684 9.84974 111.61 9.862 111.536 9.85741C111.162 9.85741 111.091 9.56501 110.964 9.2952L110.963 9.29437ZM110.714 8.14899C110.683 8.14847 110.653 8.1505 110.622 8.15506V8.59133C110.69 8.59739 110.763 8.59739 110.848 8.59739C110.878 8.59999 110.909 8.59611 110.938 8.58601C110.966 8.5759 110.993 8.55979 111.015 8.53869C111.038 8.5176 111.055 8.49198 111.068 8.46346C111.08 8.43495 111.086 8.40416 111.086 8.37305C111.086 8.22974 111.013 8.14872 110.848 8.14872L110.714 8.14899Z"
                fill="#82C341"
              ></path>
            </svg>
            <InputGroup ml={"28"} borderRadius={5} width={"2xl"} size="sm">
              <InputLeftElement pointerEvents="none" children={<CiSearch />} />
              <Input
                type="text"
                value={searchbar}
onChange={(e)=>setsearchbar(e.target.value)}
                placeholder={"Search for"+" " +arr[currentIndex]}
                border="1px solid #949494"
              />
              <InputRightAddon p={0} border="none">
                <Button
                  size="sm"
                  borderLeftRadius={0}
                  bg={"Highlight"}
                  borderRightRadius={3.3}
                  border="1px solid #949494"
                >
                  Search
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Box>
        </Box>

        <Box>
          <Box display={"flex"}>
            <img
              style={{ width: "auto", height: "60px" }}
              className="gif"
              src="https://images.mamaearth.in/vip-desktop-join.gif"
              alt="gif"
            />

            <Box
              ref={btnRef}
              onClick={onOpen}
              cursor={"pointer"}
              display={"flex"}
              alignContent={"center"}
              alignItems={"center"}
              ml={5}
              fontSize={"inherit"}
              fontWeight={"bold"}
            >
              <BsCart3 size={20} color="blue" fontWeight={"800"} />
              <span>Cart</span>
            </Box>
            <Box
          
            onClick={()=>Nav('/sign')}
              cursor={"pointer"}
              display={"flex"}
              alignContent={"center"}
              alignItems={"center"}
              ml={5}
              fontSize={"inherit"}
              fontWeight={"bold"}
            >

            

              <AiOutlineUser size={20} color="blue" fontWeight={"800"} />

  <span>
                {
                  auth.length >0?auth[0].payload: "Login"
                }
               


              </span>


            </Box>
          </Box>
        </Box>
      </Box>
      <Divider mt={3} />
      <BottomNav search = {searchbar} />

      <Drawer
        size={"md"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            display={"flex"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <BsArrowLeft size={25} color="blue" />{" "}
            <span className="pl-4 font-semibold text-blue-400">My Cart</span>
          </DrawerHeader>
          <Divider />

          <DrawerBody>
            {selector.length < 1 ? (
              <>
                <Box paddingLeft={85}>
                  <img
                    className="w-60 pl-10"
                    src="https://images.mamaearth.in/wysiwyg/bags2x.png?fit=contain"
                    alt=""
                  />
                  <span className="font-bold text-center text-xl pl-10">
                    Your cart is empty !
                  </span>
                  <p className="text-xs pt-3 font-serif">
                    It's a good day to buy the items you saved for later
                  </p>
                  <Button
                    bg={"Highlight"}
                    color={"whiteAlpha.700"}
                    marginLeft={20}
                    marginTop={5}
                  >
                    Shop Now
                  </Button>
                </Box>
              </>
            ) : (
              <Box>
                {selector?.map((e, i) => (
                  <DrawerCart
                    key={i}
                    id={e.id}
                    pic={e.pic}
                    title={e.title}
                    dec={e.dec}
                    rate={e.rate}
                    review={e.review}
                    price={e.price}
                    qty={e.qty}
                  />
                ))}
              </Box>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Subtotal :-{total}
            </Button>
            <Button colorScheme="blue">Check to Proceed</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
