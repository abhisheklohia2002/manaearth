import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import CartProductList from '../components/CartProductList'
import { Grid, GridItem } from '@chakra-ui/react'

const Product = [
  {
    id:1,
    pic:"https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-sunscreen1.jpg?fit=contain&width=400&height=400",
    title:"Vitamin C Daily Glow Sunscreen with Vitamin C & Turmeric for Sun Protection & Glow - 50 g",
    dec:'SPF 50 & PA+++ Protection | Adds Natural Glow',
    rate:"★4.9",
    review:152,
    price:349
  },
  {
    id:2,
    pic:"https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-sunscreen1.jpg?fit=contain&width=400&height=400",
    title:"Vitamin C Daily Glow Sunscreen with Vitamin C & Turmeric for Sun Protection & Glow - 50 g",
    dec:'SPF 50 & PA+++ Protection | Adds Natural Glow',
    rate:"★4.9",
    review:152,
    price:349
  },
  {
    id:3,
    pic:"https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-sunscreen1.jpg?fit=contain&width=400&height=400",
    title:"Vitamin C Daily Glow Sunscreen with Vitamin C & Turmeric for Sun Protection & Glow - 50 g",
    dec:'SPF 50 & PA+++ Protection | Adds Natural Glow',
    rate:"★4.9",
    review:152,
    price:349
  },
  {
    id:4,
    pic:"https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-sunscreen1.jpg?fit=contain&width=400&height=400",
    title:"Vitamin C Daily Glow Sunscreen with Vitamin C & Turmeric for Sun Protection & Glow - 50 g",
    dec:'SPF 50 & PA+++ Protection | Adds Natural Glow',
    rate:"★4.9",
    review:152,
    price:349
  }
]




export default function Home() {




  return (
   <Box>
    <img className='object-contain' src="https://images.ctfassets.net/66mrrren2unf/6hO4nfD3zudJXPMkQNKXFV/265b7d096869c376d11afcdaf7956a74/1920X512.jpg?q=40" alt="" />
   <Grid pl={"200"}  pt={20} templateColumns='repeat(3, 1fr)' gap={6}>
  
 {
  Product?.map((e,i)=> <CartProductList key= {i} id = {e.id} pic= {e.pic} title = {e.title} dec = {e.dec} rate = {e.rate} review  = {e.review} price  = {e.price} 
  
  />)
 }
   
    

</Grid>

   </Box>
  )
}
