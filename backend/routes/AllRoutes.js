const express = require('express');
const router = express();


const { SignUp } = require('../controller/SignUp');
const { verifyToken } = require('../middleware/Auth');
const Login = require('../controller/Login');
const { ReadAllProject } = require('../controller/ActionCreater');
const Checkout = require('../controller/Checkout');

router.post('/sign',SignUp);
router.post("/login",Login);
router.get("/product",ReadAllProject);


router.post("/checkout",Checkout)
module.exports = router