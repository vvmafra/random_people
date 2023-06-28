import personControllers from "../controllers/person.controllers";
import { Router } from "express";

const personRouter = Router()

personRouter.get("/person", personControllers.personFind)

export default personRouter