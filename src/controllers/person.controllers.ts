import { Request, Response } from "express"
import personService from "../services/person.service"

async function personFind(req: Request, res: Response){
    const person = await personService.getPerson()
    res.send(person)
}

const personControllers = {
    personFind
}

export default personControllers
