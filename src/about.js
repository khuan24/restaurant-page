import saloon from "./resources/img/Saloon.png"
import gusIcon from "./resources/img/icons/Gus_Icon.png"
import emilyIcon from "./resources/img/icons/Emily_Icon.png"

export function renderAbout() {
    const contentDiv = document.querySelector(".half-full")
    const aboutBtn = document.querySelector("#about")
    console.log("Rendering About")

    contentDiv.replaceChildren()
    aboutBtn.classList.add("on-page")

    const headingLocation = document.createElement("h3")
    headingLocation.textContent = "location"
    contentDiv.appendChild(headingLocation)

    const paraLocation = document.createElement("p")
    paraLocation.classList.add("about") 
    paraLocation.textContent = "Townsquare, Stardew Valley"
    contentDiv.appendChild(paraLocation)

    const headingHours = document.createElement("h3")
    headingHours.textContent = "open hours"
    contentDiv.appendChild(headingHours)

    const paraHours = document.createElement("p")
    paraHours.classList.add("about") 
    paraHours.textContent = "12:00 AM ~ 12:00 PM"
    contentDiv.appendChild(paraHours)

    const headingStaff = document.createElement("h3")
    headingStaff.textContent = "Staff"
    contentDiv.appendChild(headingStaff)

    const employeeGus = document.createElement("div")
    employeeGus.classList.add("employee")
    const gusImg = document.createElement("img")
    gusImg.src = gusIcon
    gusImg.alt = "Gus"
    employeeGus.appendChild(gusImg)
    const gusName = document.createElement("p")
    gusName.classList.add("about")
    gusName.textContent = "Gus"
    employeeGus.appendChild(gusName)
    contentDiv.appendChild(employeeGus)

    const employeeEmily = document.createElement("div")
    employeeEmily.classList.add("employee")
    const emilyImg = document.createElement("img")
    emilyImg.src = emilyIcon
    emilyImg.alt = "Emily"
    employeeEmily.appendChild(emilyImg)
    const emilyName = document.createElement("p")
    emilyName.classList.add("about")
    emilyName.textContent = "Emily"
    employeeEmily.appendChild(emilyName)
    contentDiv.appendChild(employeeEmily)

    const image = document.createElement("img")
    image.classList.add("portrait")
    image.classList.add("big")
    image.src = saloon
    image.alt = "Saloon exterior"
    contentDiv.appendChild(image)
}