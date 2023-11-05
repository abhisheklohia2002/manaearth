import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct, RemoveProduct } from "../Store/ProductSlice";
export default function CartProductList({
  id,
  pic,
  title,
  dec,
  rate,
  review,
  price,
}) {
  const selector = useSelector((state) => state.ProductSlice);
//   console.log(selector);

  const dispatch = useDispatch();
  const [done, setdone] = useState(true);
  const [count, setcount] = useState("");
  const HandleAdd_TO_Cart = (id, pic, title, dec, rate, review, price) => {
    const getresult = selector.find((e, i) => e.id === id);
    // console.log(getresult, "hello");
    if (getresult) {
    //   setcount((count) => count + 1);

      dispatch(RemoveProduct({ id }));
      let qty = getresult.qty + 1;
      setcount(qty)
      const payload = { id, pic, title, dec, rate, review, price, qty };
      dispatch(AddProduct(payload));
    } else {
        let qty = 1;
      setcount(qty)
       
      const payload = { id, pic, title, dec, rate, review, price, qty };
    //   console.log(payload);
      dispatch(AddProduct(payload));
      setdone(!done);
    }
  };
  const Handle_Remove_To_cart = (id) => {
    const getresult = selector.find((e, i) => e.id === id);
    if (getresult.qty > 1) {
      
      
      let qty = getresult.qty - 1;
      setcount(qty)
      const payload = { id, pic, title, dec, rate, review, price, qty };
      dispatch(RemoveProduct({ id }));

      dispatch(AddProduct(payload));
    } else {
      dispatch(RemoveProduct({ id }));
      setcount(1)
    
      setdone(!done);

    }
  };
  return (
    <Box key={id} border={""} className="text-center boxGrid" width={330}>
      <img className="w-80" src={pic} alt={title} />
      <h3 className="text-black-400 w-80 font-bold">{title}</h3>
      <h4 className=" w-80 pt-2 text-green-400 text-xs">{dec}</h4>

      <p className="w-80 pt-5 text-sm">
        <span className="text-gray-500 font-semibold pr-5">{rate}</span>
        <span className="text-gray-500 font-semibold pr-5">
          {review} Reviews
        </span>
      </p>
      <h3 className="w-80 pt-3 font-bold pb-2">${price}</h3>

      <div className="w-80 mb-3">
        {done ? (
          <Button
            onClick={() =>
              HandleAdd_TO_Cart(id, pic, title, dec, rate, review, price)
            }
            width={300}
            size="md"
            bg={"Highlight"}
            color={"white"}
          >
            ADD TO CART
          </Button>
        ) : (
          <>
            <Button
              fontWeight={"600"}
              bg={"Highlight"}
              color={"blackAlpha.700"}
              onClick={() =>
                HandleAdd_TO_Cart(id, pic, title, dec, rate, review, price)
              }
            >
              +
            </Button>
            <span className="font-bold text-sm pl-10 pr-10">{count}</span>
            <Button
              fontWeight={"600"}
              bg={"Highlight"}
              color={"blackAlpha.700"}
              onClick={() => Handle_Remove_To_cart(id)}
            >
              -
            </Button>
          </>
        )}
      </div>
    </Box>
  );
}
