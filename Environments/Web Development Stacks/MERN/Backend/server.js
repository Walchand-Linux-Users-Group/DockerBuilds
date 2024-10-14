const express = require('express')
const cors = require('cors')
const db = require('./db/db')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
    res.send("Pong")
})

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT} `)
})
