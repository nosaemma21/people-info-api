import { Request, Response, NextFunction } from "express";

export const asyncCatcher = <T = any>(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<T>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default asyncCatcher;
