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
//todo - Connect to Database
connectDB()
//todo - Set Middleware
app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))

//todo - Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)
//todo - Start Server

app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`)
})