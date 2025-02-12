import { renderHome } from "./home.js"
import { renderMenu } from "./menu.js"
import { renderAbout } from "./about.js"
import "./styles.css"

const renderContent = (function () {
    const homeBtn = document.querySelector("#home")
    const menuBtn = document.querySelector("#menu")
    const aboutBtn = document.querySelector("#about")

    // Initial render
    renderHome()

    const removeMark = (button) => {
        if (button.classList.contains("on-page")) {
            button.classList.remove("on-page")
        }
    }

    homeBtn.addEventListener("click", () => {
        renderHome()
        removeMark(menuBtn)
        removeMark(aboutBtn)
    })
    
    menuBtn.addEventListener("click", () => {
        renderMenu()
        removeMark(homeBtn)
        removeMark(aboutBtn)
    })
    
    aboutBtn.addEventListener("click", () => {
        renderAbout()
        removeMark(menuBtn)
        removeMark(homeBtn)
    })
})()
