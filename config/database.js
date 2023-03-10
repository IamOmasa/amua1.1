const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log(process.env.DB_STRING)
        const conn = await mongoose.connect(process.env.DB_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`mongoDB connected:${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB