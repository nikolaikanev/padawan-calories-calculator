const obj = require("./functions.js")
const renderTable = obj['renderTable']
const tty = require('tty')
const readline = require('readline')
// const addMealsObject = require("./add-meals.js")
// const addMeal = addMealsObject['addMeal']
const fs = require('fs');
const parse = require('csv-parse/lib/sync')
const mainPageObj = require("./main-page.js")
const mainPage = mainPageObj['mainPage']
const mealsPageObj = require("./meals-page.js")
const mealsPage = mealsPageObj['mealsPage']


const emptySpace = (space, times) => {
    let result = ""
    for (let i = 0; i < times; i = i + 1) {
        result = result + space
    }
    return result
}

const nav = () => {
    let Quit = "Q"
    let Add = "A"
    let quit = "|" + emptySpace(" ", 5) + Quit + " - " + "to quit" + emptySpace(" ", 5) + "|"
    let add = "|" + emptySpace(" ", 5) + Add + " - " + "to add" + emptySpace(" ", 5) + "|"
    return add + quit
}

const renderPage = (page) => {
    console.clear()
    page()
    console.log(emptySpace(" ", 500))
    console.log(nav())
}

const run = () => {
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)

    process.stdin.on('keypress', function (_chunk, key) {
        if (key && key.shift && key.name == 'q') process.exit()
        if (key && key.shift && key.name == 'a') {
            console.log(emptySpace(" ", 2000))
            renderPage(addMeal)
        }
        // Show "M" in navigation
        // Fix Meals table
        // Use renderPage for the below
        if (key && key.shift && key.name == 'm') {
          console.clear()
          mealsPage()
          console.log(emptySpace(" ", 500))
          console.log(nav())
        }
      })

    renderPage(mainPage)
}


run()
