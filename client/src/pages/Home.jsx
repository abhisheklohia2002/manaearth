import { Box, Flex } from '@chakra-ui/react'
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react'
import CartProductList from '../components/CartProductList'
import { Grid, GridItem } from '@chakra-ui/react'
import { BiSort } from "react-icons/bi";
const Product = [
  {
    id:506,
    pic:"https://images.mamaearth.in/catalog/product/w/i/with-ingredient_2.jpg?fit=contain&width=400&height=400",
    title:"Gently Cleanses  | Hydrates & Soothes Skin | Fragrance & Soap - Free",
    dec:'Gently Cleanses  | Hydrates & Soothes Skin | Fragrance & Soap - Free',
    rate:"★4.9",
    review:132,
    price:589
  },
  {
    id:507,
    pic:"https://images.mamaearth.in/catalog/product/1/-/1-with-ingredient_1.jpg?fit=contain&width=400&height=400",
  //   pic:"https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-sunscreen1.jpg?fit=contain&width=400&height=400",
    title:"Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 100ml",
    dec:'Removes Tan | Brightens Skin',
    rate:"★4.9",
    review:154,
    price:452
  },
  {
    id:508,
    pic:"https://images.mamaearth.in/catalog/product/m/u/multani_mitti_face_wash_1.jpg?fit=contain&width=400&height=400",

  //   pic:"https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-sunscreen1.jpg?fit=contain&width=400&height=400",
    title:"Vitamin C Daily Glow Sunscreen with Vitamin C & Turmeric for Sun Protection & Glow - 50 g",
    dec:'SPF 50 & PA+++ Protection | Adds Natural Glow',
    rate:"★4.9",
    review:102,
    price:985
  },
  {
    id:509,
    pic:"https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-sunscreen1.jpg?fit=contain&width=400&height=400",
    title:"Vitamin C Daily Glow Sunscreen with Vitamin C & Turmeric for Sun Protection & Glow - 50 g",
    dec:'SPF 50 & PA+++ Protection | Adds Natural Glow',
    rate:"★4.9",
    review:72,
    price:300
  },{
      id:510,
      pic:"https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpeg?fit=contain&width=400&height=400",
      title:"Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 150 ml",
      dec:'Controls Oil & Acne | Promotes Hydration',
      rate:"★4.9",
      review:72,
      price:259
  }
]







export default function Home({info}) {
const arr = ['https://images.ctfassets.net/66mrrren2unf/6hO4nfD3zudJXPMkQNKXFV/265b7d096869c376d11afcdaf7956a74/1920X512.jpg?q=40',
"https://images.ctfassets.net/66mrrren2unf/78bO0PUzojusja2SRo6tMh/37c2c39fd48e4e3a640d94a69a5b9e74/1920x520__3___1_.jpg?q=40",
"https://images.ctfassets.net/66mrrren2unf/4U9h8b0HGYBVTl6vXC30rU/21326a69ba4f9b17982f80967b31703d/ubtan-desktop.jpg?q=40",
"https://images.ctfassets.net/66mrrren2unf/1ItcpMJJD5vNEdq8GGNTfm/21c08796b2ac576edfb228049beb9159/Desktop.jpg?q=40"
]
const [FaceProducts,setfaceproduct] = useState(Product)

const [currentIndex, setCurrentIndex] = useState(0);


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

  setfaceproduct(FaceProducts)
console.log(FaceProducts)

} 

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
  }, 3000);

  return () => clearInterval(interval);
}, [arr.length]);

console.log(info)


  return (
   <Box>
    <img className='object-contain' src={arr[currentIndex]} alt="" />
    <Flex className="justify-between pt-12" width={"80%"} margin={"auto"}>
        <Box className="font-bold text-lg">All Products</Box>
        <Box className="flex place-items-center align-middle  text-lg font-semibold text-blue-500">


          <Popover>
      <PopoverTrigger>
          <Button
          bg={"ButtonFace"}
          className="cursor-pointer"
          >Sort
           <span className="pt-1">
            <BiSort />
          </span>
          
          </Button>
       
         
    
        
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
   
        </Box>
      </Flex>
   <Grid pl={"200"}  pt={20} templateColumns='repeat(3, 1fr)' gap={6}>
  
 {
  FaceProducts?.map((e,i)=> <CartProductList key= {i} id = {e.id} pic= {e.pic} title = {e.title} dec = {e.dec} rate = {e.rate} review  = {e.review} price  = {e.price}  
  
  />)
 }
   
    

</Grid>

<Flex width={"80%"}
margin={"auto"}
pl={20}
pt={50}
>
  <Box>
    <img className='h-60 max-w-screen-lg' src="https://i.ytimg.com/vi/YROZybuYGUE/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVihJMA8=&rs=AOn4CLDnvT77B-zPqdmlUskAGE-zKn8BbQ" alt="" />
  </Box>
  <Box className=''
  width={"50%"}
  margin={"auto"}
  textAlign={"center"}
  >
    <h3
    className='font-semibold
    text-xl
    '
    >
    Our Goodness Promise
    </h3>
    <p
    className='text-base'
    >
    At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.
    </p>


    <Box>
      <Button
      className='uppercase'
      colorScheme='white'
      bg={"Highlight"}
      >
        Shop Now
        </Button>
        <Button
         className='uppercase'
         color='facebook'
         bg={"ButtonFace"}
         m={5}
        >
          Our Pledges
        </Button>
    </Box>
  </Box>
</Flex>

<Box>
<p
className='text-center text-xl font-bold pt-4'
>
Super Safe Standards
</p>
 
  </Box>
   </Box>
  )
}
