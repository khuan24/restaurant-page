import beerIcon from "./resources/img/icons/Beer.png"
import coffeeIcon from "./resources/img/icons/Coffee.png"
import breadIcon from "./resources/img/icons/Bread.png"
import saladIcon from "./resources/img/icons/Salad.png"
import spagIcon from "./resources/img/icons/Spaghetti.png"
import pizzaIcon from "./resources/img/icons/Pizza.png"

export function renderMenu() {
    const contentDiv = document.querySelector(".half-full")
    const menuBtn = document.querySelector("#menu")
    console.log("Rendering Menu")

    contentDiv.replaceChildren()
    menuBtn.classList.add("on-page")

    const heading = document.createElement("h2")
    heading.classList.add("menu")
    heading.textContent = "Our Menu"
    contentDiv.appendChild(heading)
}
