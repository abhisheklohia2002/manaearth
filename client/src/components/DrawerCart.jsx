import { Box, Button, Divider } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProduct, RemoveProduct } from '../Store/ProductSlice';

export default function DrawerCart(
    {id,pic,title,dec,rate,review,price,qty}
) {

const selector = useSelector((state)=>state.ProductSlice)
const dispatch = useDispatch();
const HandleAdd_TO_Cart = (id, pic, title, dec, rate, review, price) => {
    const getresult = selector.find((e, i) => e.id === id);
    // console.log(getresult, "hello");
    if (getresult) {
  

      dispatch(RemoveProduct({ id }));
      let qty = getresult.qty + 1;
      
      const payload = { id, pic, title, dec, rate, review, price, qty };
      dispatch(AddProduct(payload));
    } else {
        let qty = 1;
   
      const payload = { id, pic, title, dec, rate, review, price, qty };
    //   console.log(payload);
      dispatch(AddProduct(payload));
     
    }
  };
  const Handle_Remove_To_cart = (id) => {
    const getresult = selector.find((e, i) => e.id === id);
    if (getresult.qty > 1) {
    

      let qty = getresult.qty - 1;
      const payload = { id, pic, title, dec, rate, review, price, qty };
      dispatch(RemoveProduct({ id }));

      dispatch(AddProduct(payload));
    } else {
      dispatch(RemoveProduct({ id }));
     

    }
  };

  return (
    <>
<Box  display={"flex"} justifyContent={"space-evenly"} 
alignContent={"center"} alignItems={"center"}
>
   <img className='w-32' src={pic} alt="" />
   <span className='text-xs w-40 font-semibold '>
    {title}
   </span>
   <span
    className='text-xs font-semibold '
   >
    ${price * qty}
   </span>


   <Button onClick={()=>HandleAdd_TO_Cart(id, pic, title, dec, rate, review, price)} size={'xs'}>
    +
   </Button>
  <span className='text-xs font-semibold'>
    {qty}
  </span>
  <Button
  size={'xs'}
  onClick={()=>Handle_Remove_To_cart(id)}
  >
    -
  </Button>
</Box>
<Divider/>
    </>
  )
}
