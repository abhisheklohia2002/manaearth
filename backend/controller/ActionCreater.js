

const Product = require("./product")
const ReadAllProject = async(req,res)=>{
    try {
    res.send(Product)
    } catch (error) {
        res.json(error)
    }
}




module.exports = {ReadAllProject};

