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
const addMealsObj = require("./add-meals.js");
const { clear } = require("console");
const addMeal = addMealsObj['addMeal']


const emptySpace = (space, times) => {
    let result = ""
    for (let i = 0; i < times; i = i + 1) {
        result = result + space
    }
    return result
}

const nav = () => {
    let Quit = "ctrl + q to quit"
    let Add = "ctrl + a to add"
    let Meals = "ctrl + w to meals"
    let Overview = "ctrl + o to overview"
    let buttonLength = 20
    let emptySpaceLengthFirstButton = (buttonLength - Quit.length) / 2
    let emptySpaceLengthSecondButton = (buttonLength - Quit.length) / 2
    let emptySpaceLengthThirtButton = (buttonLength - Quit.length) / 2
    let emptySpaceLengthFourthButton = (buttonLength - Quit.length) / 2

    let quit = "|" + emptySpace(" ", emptySpaceLengthFirstButton) + Quit + emptySpace(" ", emptySpaceLengthFirstButton) + "|"
    let add = "|" + emptySpace(" ", emptySpaceLengthSecondButton) + Add + emptySpace(" ", emptySpaceLengthSecondButton) + "|"
    let meals = "|" + emptySpace(" ", emptySpaceLengthThirtButton) + Meals + emptySpace(" ", emptySpaceLengthThirtButton) + "|"
    let overview = "|" + emptySpace(" ", emptySpaceLengthFourthButton) + Overview + emptySpace(" ", emptySpaceLengthFourthButton) + "|"
    return add + meals + quit + overview
  }
  

const renderPage = (page) => {
    console.clear()
    page()
    console.log(emptySpace(" ", 700))
    console.log(nav())
}

const run = () => {
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)

    process.stdin.on('keypress', function (_chunk, key) {
        if (key && key.ctrl && key.name == 'q') {
          console.clear()
          process.exit()
        }
        if (key && key.ctrl && key.name == 'a') {
            console.clear()
            addMeal(() => { renderPage(mealsPage)})

        }
        if (key && key.ctrl && key.name == 'w') {
            renderPage(mealsPage)
        }
        if (key && key.ctrl && key.name == 'o') {
            renderPage(mainPage)
        }
      })

    renderPage(mainPage)
}


run()
