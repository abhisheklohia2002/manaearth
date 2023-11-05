const express = require('express');
const router = express();


const { SignUp } = require('../controller/SignUp');
const { verifyToken } = require('../middleware/Auth');
const Login = require('../controller/Login');
const { ReadAllProject } = require('../controller/ActionCreater');

router.post('/sign',SignUp);
router.post("/login",Login);
router.get("/product",ReadAllProject)
module.exports = router