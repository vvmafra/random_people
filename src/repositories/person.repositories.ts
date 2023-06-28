import { db } from "../database/database.connection";

async function getPerson(){
    const findPerson = await db.query(`SELECT * FROM people`)
    const totalPeople = findPerson.rows.length
    let aleatoryNumber = Math.floor(Math.random() * (totalPeople - 1 + 1)) + 1;
    const selectedPerson = await db.query(`SELECT * FROM people WHERE id=$1`,[aleatoryNumber])
    return selectedPerson.rows
}

const personRepository = {
    getPerson
}

export default personRepository