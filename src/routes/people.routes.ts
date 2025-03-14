import express, { Router } from "express";
import { getPeople } from "../controllers/people.controller";

const router: Router = express.Router();

router.get("/", getPeople);

export default router;
