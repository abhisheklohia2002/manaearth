const instance = require("../index");

const Checkout = async(req,res)=>{
    const options = {
        amount:500 * 100,
        curreny:"INR",

    }
    try {
const order = await instance.orders.create(options)
        console.log(order);
        res.status(200).json({
            success:true,
            order
        })
    } catch (error) {
     console.log(error)   
    }
}

module.exports = Checkout;
