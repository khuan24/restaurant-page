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

    const menuItems = [
        {
            name: "Coffee",
            img: coffeeIcon,
            price: 300
        },
        {
            name: "Beer",
            img: beerIcon,
            price: 400
        },
        {
            name: "Bread",
            img: breadIcon,
            price: 120
        },
        {
            name: "Salad",
            img: saladIcon,
            price: 220
        },
        {
            name: "Spaghetti",
            img: spagIcon,
            price: 240
        },
        {
            name: "Pizza",
            img: pizzaIcon,
            price: 600
        }
    ]

    let menuCount = 0

    const createMenuItem = (obj) => {
        const row = document.createElement("tr")
        console.log("calling menu creation")

        const imgCell = document.createElement("td")
        const img = document.createElement("img")
        img.src = obj.img
        img.alt = obj.name
        imgCell.appendChild(img)
        row.appendChild(imgCell)

        const nameCell = document.createElement("td")
        nameCell.textContent = obj.name
        row.appendChild(nameCell)

        const priceCell = document.createElement("td")
        priceCell.classList.add("price")
        priceCell.textContent = obj.price + "g"
        row.appendChild(priceCell)

        return row
    }

    const table = document.createElement("table")

    const rowDrinks = document.createElement("tr")
    rowDrinks.classList.add("category")
    const thDrinks = document.createElement("th")
    thDrinks.colSpan = 3
    thDrinks.textContent = "Drinks"
    rowDrinks.appendChild(thDrinks)
    table.appendChild(rowDrinks)

    while (menuCount<2) {
        table.appendChild(createMenuItem(menuItems[menuCount]))
        menuCount++
    }

    const rowClassics = document.createElement("tr")
    rowClassics.classList.add("category")
    const thClassics = document.createElement("th")
    thClassics.colSpan = 3
    thClassics.colspan = 3
    thClassics.textContent = "Classics"
    rowClassics.appendChild(thClassics)
    table.appendChild(rowClassics)
    
    while (menuCount<menuItems.length) {
        table.appendChild(createMenuItem(menuItems[menuCount]))
        menuCount++
    }
    
    contentDiv.appendChild(table)
}
