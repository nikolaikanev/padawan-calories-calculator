const tty = require('tty')
const readline = require('readline')
const emptySpace = (space, times) => {
  let result = ""
  for(let i = 0; i < times; i = i + 1) {
      result = result + space
  }
  return result
}
// console.log(emptySpace(" ", 200))
// console.log(emptySpace(" ", 35) + "Home page" + emptySpace(" ", 35))
// console.log(emptySpace(" ", 1500))
// // console.log(Array(process.stdout.rows + 1).join('\n'));

const nav = () => {
  let Quit = "Q - to quit"
  let Add = "A - to add"
  let Meals = "M - to see eaten meals"
  let quit = "|" + emptySpace(" ", 10.5) + Quit + emptySpace(" ", 10.5) + "|"
  let add = "|" + emptySpace(" ", 10) + Add + emptySpace(" ", 10) + "|"
  let meals = "|" + emptySpace(" ", 5) + Meals + emptySpace(" ", 5) + "|"
  return add + meals + quit
}

console.log(nav())
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
    clear()
    console.log(emptySpace(" ", 60) + "Example" + emptySpace(" ", 40))
    console.log(Array(process.stdout.rows + 1).join('\n'));
    console.log(nav())
  }
})

