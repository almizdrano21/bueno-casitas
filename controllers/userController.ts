import { Request, Response } from "express"

interface PageOptions {
  title: string,
  heading?: string
}

/**
 * Ver si puedo crear una interfaz para las funciones estas
 * @param req 
 * @param res 
 */

export const loginForm = (req: Request, res: Response) => {
  const loginPage: PageOptions = {
    title: "Sign up",
    heading: "Log in to your account"
  }
    res.render("auth/login.pug", loginPage);
};
export const registerForm = (req: Request, res: Response) => {
  const registerPage: PageOptions = {
    title: "Sign in",
    heading: "Create an account"
  }
  res.render("auth/register.pug", registerPage);
};
export const forgotPassword = (req: Request, res: Response) => {
  const forgotPasswordPage: PageOptions = {
    title: "Forgot password",
    heading: "Recover your password for Bueno Casitas"
  }
  res.render("auth/forgotPassword", forgotPasswordPage)
} 