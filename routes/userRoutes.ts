import express from 'express'
import {loginForm, registerForm, forgotPassword} from "../controllers/userController"
const router = express.Router()

router.get('/login', loginForm)
router.get('/register', registerForm)
router.get('/forgotPassword', forgotPassword)

export default router