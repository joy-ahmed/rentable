import express from "express"
import { register } from "../controllers/_authController.js"


const router = express.Router()

router.post('/register', register)

export default router