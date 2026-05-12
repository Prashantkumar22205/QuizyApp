 require("dotenv").config()
const app = require("./src/index")
const ConnectDB = require("./src/config/db")

ConnectDB()

app.listen(3000,()=>{
    console.log("Server is running !")
})