import { Request, Response } from "express";

const notFoundMiddleware = (_: Request, res: Response) => {
  res
    .status(404)
    .json({
      success: false,
      message: "Sorry, the request resource is not available 🙅‍♂️ !!!",
    });
};

export default notFoundMiddleware;
