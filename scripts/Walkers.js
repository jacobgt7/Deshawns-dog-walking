import { getWalkers, getCities, getWalkerCities } from "./database.js"

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

           
            */
            const [, primaryKey] = itemClicked.id.split("--")


            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
                */
            let matchingWalker = null
            for (const walker of walkers) {

                /*
                Compare the primary key of each walker to the one
                you have. 
                Assign the matching walker object to the variable.
             */
                if (walker.id === parseInt(primaryKey)) {
                    matchingWalker = walker
                }



            }
            /*
                Find and return an array of city objects matched to the walker.                
            */
            let matchingCities = []
            for (let walkerCity of walkerCities) {
                if (walkerCity.walkerId === matchingWalker.id) {
                    for (let city of cities) {
                        if (city.id === walkerCity.cityId) {
                            matchingCities.push(city.name)
                        }
                    }
                }
            }


            /* 
                Function that takes an array of matching city objects and returns a 
                string containing the city names. 
            */
            const matchingCitiesAsString = (citiesArray) => {
                return citiesArray.join(" and ")
            }

            window.alert(`${matchingWalker.name} services ${matchingCitiesAsString(matchingCities)}`)
        }
    }
)

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

