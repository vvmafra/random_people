import express, { json, Request, Response} from "express"
import personRouter from "./routers/person.router";

const app = express()
app.use(json())

app.get("/health", (req: Request, res: Response) => res.sendStatus(400));
app.use(personRouter)

const port: number = parseInt(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})