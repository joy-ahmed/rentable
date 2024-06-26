import express from 'express'
import cookieParser from 'cookie-parser'
import authRoute from './routers/_authRoute.js'

const app = express()
const PORT = 3000 || proccess.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoute)


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})