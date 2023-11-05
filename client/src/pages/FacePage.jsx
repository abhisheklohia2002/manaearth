import { Box, Flex } from "@chakra-ui/react";
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';

import React, { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { Grid, GridItem } from '@chakra-ui/react'
import CartProductList from "../components/CartProductList";
const arr = [
  "https://images.ctfassets.net/66mrrren2unf/6hO4nfD3zudJXPMkQNKXFV/265b7d096869c376d11afcdaf7956a74/1920X512.jpg?q=40",
  "https://images.ctfassets.net/66mrrren2unf/78bO0PUzojusja2SRo6tMh/37c2c39fd48e4e3a640d94a69a5b9e74/1920x520__3___1_.jpg?q=40",
  "https://images.ctfassets.net/66mrrren2unf/4U9h8b0HGYBVTl6vXC30rU/21326a69ba4f9b17982f80967b31703d/ubtan-desktop.jpg?q=40",
  "https://images.ctfassets.net/66mrrren2unf/1ItcpMJJD5vNEdq8GGNTfm/21c08796b2ac576edfb228049beb9159/Desktop.jpg?q=40",
];

export default function FacePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
const [FaceProducts,setfaceproduct] = useState([])
  const AllProducts = async()=>{
    try{
const callServer = await fetch(`http://localhost:8080/api/product`);
const res = await callServer.json();
setfaceproduct(res)
console.log(FaceProducts)
    }
    catch(error){
      console.log(error)
    }
  }


function HandleSort(x){
  console.log(x)
  if(x){
    for(var i = 0; i<FaceProducts.length; i++){
      for(var j = 0; j<FaceProducts.length-i-1; j++){
        if(FaceProducts[j].price < FaceProducts[j+1].price){
          var temp = FaceProducts[j];
          FaceProducts[j] = FaceProducts[j+1];
          FaceProducts[j+1] = temp;
  
        }
      }
    }
  }
  else {
    for(var i = 0; i<FaceProducts.length; i++){
      for(var j = 0; j<FaceProducts.length-i-1; j++){
        if(FaceProducts[j].price > FaceProducts[j+1].price){
          var temp = FaceProducts[j];
          FaceProducts[j] = FaceProducts[j+1];
          FaceProducts[j+1] = temp;
  
        }
      }
    }
  }
console.log(FaceProducts)

} 

  useEffect(()=>{
AllProducts()
  },[])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [arr.length]);
  return (
    <>
      <img className="object-contain" src={arr[currentIndex]} alt="" />
      <Box className="text-center font-bold text-2xl mt-10">
        Best Skin Care Products
      </Box>

      <Flex className="justify-between" width={"80%"} margin={"auto"}>
        <Box className="font-bold text-lg">Our Products</Box>
        <Box className="flex place-items-center align-middle  text-lg font-semibold text-blue-500">


          <Popover>
      <PopoverTrigger>
          <span
          className="cursor-pointer"
          >Sort</span>
       
         
    
        
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader
        className="text-base font-semibold text-gray-800"
        >Sort By </PopoverHeader>
        <PopoverBody>
            <p
             className="text-base"
            >
                <Button
                className=""
                bg={"AppWorkspace"}
                onClick={()=>HandleSort(true)}
                >
                High To Low,Price
                </Button>
            </p>
            <p
             className="text-base"
            >
               <Button
                bg={"AppWorkspace"}
                onClick={()=>HandleSort(false)}
               >
               Low To High,Price
               </Button>
            </p>
        </PopoverBody>
      </PopoverContent>
    </Popover>
    <span className="pt-1">
            <BiSort />
          </span>
        </Box>
      </Flex>
      <Flex
      width={"80%"} margin={"auto"}
    
      className="justify-evenly uppercase pt-5"

      >
        <Button
    className="uppercase"
        >All</Button>
        <Button
    className="uppercase"
        
        >
            Face Toner
        </Button>
        <Button
    className="uppercase"
        
        >
            Face Srum
        </Button>
        <Button
    className="uppercase"
        
        >
            Face gel
        </Button>
        <Button
    className="uppercase"
        
        >
            Face Cream
        </Button>
        <Button
    className="uppercase"
        
        >
            Face Wash
        </Button>
      </Flex>
<Box>

<Grid pl={"200"}  pt={20} templateColumns='repeat(3, 1fr)' gap={6}>
  
  {
   FaceProducts?.map((e,i)=> <CartProductList key= {i} id = {e.id} pic= {e.pic} title = {e.title} dec = {e.dec} rate = {e.rate} review  = {e.review} price  = {e.price}  
   
   />)
  }
    
     
 
 </Grid>

</Box>

    </>
  );
}
