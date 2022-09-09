import { getPets, getWalkers } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            let [, petPrimaryKey] = itemClicked.id.split("--")

            let matchingPet = null
            for (let pet of pets) {
                if (pet.id === parseInt(petPrimaryKey)) {
                    matchingPet = pet
                }

            }

            let matchingWalker = null
            for (let walker of walkers) {
                if (walker.id === matchingPet.walkerId) {
                    matchingWalker = walker
                }
            }
            window.alert(`${matchingPet.name} is walked by ${matchingWalker.name}`)
        }
    }
)

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

