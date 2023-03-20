//todo - Declare variables
const express = require("express");
const app = express()
const PORT = process.env.PORT || 8000
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
//*Import functions/routes
const connectDB = require("./config/database")
require('dotenv').config({path: './config/.env'})

// Passport config
require("./config/passport")(passport);

const homeRoutes = require('./routes/home')
const editRoutes = require("./routes/editMember")
const amountRoutes = require("./routes/amounts")

//todo - Set Middleware
app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// app.use(adminBro.options.rootPath, router)

//Use flash messages for errors, info, ect...
app.use(flash());

//todo - Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)
app.use('/amount', amountRoutes)
//todo - Start Server now

connectDB().then(() => {
     app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`)
  })
})