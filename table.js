const obj = require("./functions.js")
const renderTable = obj['renderTable']
const tty = require('tty')
const readline = require('readline')
const addMealsObject = require("./add-meals.js")
const addMeal = addMealsObject['addMeal']
const fs = require('fs');
const parse = require('csv-parse/lib/sync')


const getmeals = () => {
  const data = fs.readFileSync('meals.csv', 'utf8')
  const records = parse(data, {
    // columns: true,
    skip_empty_lines: true
  })

  return records
}
  
let meals = getmeals()



renderTable(meals, ["meal", "grams", "date"])



const emptySpace = (space, times) => {
    let result = ""
    for(let i = 0; i < times; i = i + 1) {
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
  

  console.log(emptySpace(" ", 500))
  console.log(nav())
  
  
  readline.emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)
  
  const READLINE = require('readline');
  
  function clear() {
      READLINE.cursorTo(process.stdout, 0, 0);
      READLINE.clearLine(process.stdout, 0);
      READLINE.clearScreenDown(process.stdout);
  }
  
  
  process.stdin.on('keypress', function (_chunk, key) {
    if (key && key.shift && key.name == 'q') process.exit()
    if (key && key.shift && key.name == 'a') {
      
      console.log(emptySpace(" ", 2000))
      addMeal()
    }
  })