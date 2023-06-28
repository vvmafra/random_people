import personRepository from "../repositories/person.repositories"

function getPerson(){
    const person = personRepository.getPerson()
    return person
}

const personService = {
    getPerson
}

export default personService