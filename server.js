//todo - Declare variables
const express = require("express");
const app = express()
const PORT = 8000
const mongoose = require("mongoose")
//*Import functions/routes
const connectDB = require("./config/database")
require('dotenv').config({path: './config/.env'})
const homeRoutes = require('./routes/home')
const editRoutes = require("./routes/editMember")
const amountRoutes = require("./routes/amounts")
//todo - Connect to Database
connectDB()
//todo - Set Middleware
app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))

//todo - Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)
app.use('/amount', amountRoutes)
//todo - Start Server

connectDB().then(() => {
     app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`)
  })
})