import gusPortrait from "./resources/img/Gus_Happy.png"

import { renderMenu } from "./menu.js"
   
export function renderHome() {
    const contentDiv = document.querySelector(".half-full")
    const homeBtn = document.querySelector("#home")
    console.log("Rendering Home")

    contentDiv.replaceChildren()
    homeBtn.classList.add("on-page")

    const heading = document.createElement("h2")
    heading.classList.add("home")
    heading.textContent = "Welcome to the Stardrop Saloon!"
    contentDiv.appendChild(heading)

    const para = document.createElement("p")
    para.classList.add("home") 
    para.innerHTML = "The Stardrop Saloon has been Pelican Town’s heart for decades. Whether you’re hanging out with friends or just grabbing a beer, we’ve got a seat by the fire just for you. <br /> Enjoy the music!"
    contentDiv.appendChild(para)

    const viewMenu = document.createElement("button")
    viewMenu.classList.add("view-menu")
    viewMenu.textContent = "View Menu"
    contentDiv.appendChild(viewMenu)

    viewMenu.addEventListener("click", () => {
        renderMenu()
        homeBtn.classList.remove("on-page")
    }) 

    const image = document.createElement("img")
    image.classList.add("portrait")
    image.src = gusPortrait
    image.alt = "Gus smiling"
    contentDiv.appendChild(image)
}