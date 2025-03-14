import { NextFunction, Request, Response } from "express";
import Person from "../models/person.model";
import asyncCatcher from "../helpers/asyncCatcher";

export const getPeople = asyncCatcher(
  async (req: Request, res: Response, next: NextFunction) => {
    const people = await Person.find().select("-_id");
    res.status(200).json({ success: true, people });
  }
);
