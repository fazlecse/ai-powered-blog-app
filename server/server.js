 import express from 'express'
 import 'dotenv/config'
 import cors from 'cors'

 const app = express()

//  Middlewares
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => res.send('Api is working'))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

export default app;

// db name : blogApp
// db pass : ULYzcrLRGREgOX5Q