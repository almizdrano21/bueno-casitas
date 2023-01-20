import { Request, Response } from "express"
export const loginForm = (req: Request, res: Response) => {
    res.render("auth/login.pug", {
    });
  
};

export const registerForm = (req: Request, res: Response) => {
  res.render("auth/register.pug", {
  });

};