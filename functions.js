// const READLINE = require('readline');

const renderTable = (rows, headers) => {
    let separatorLine = emptySpace("-", headers.length * 14 + 6)
    console.log(separatorLine)
    let firstRow = "|"
    for(let i = 0; i < headers.length; i = i + 1) {
        let header = headers[i]
        let afterHeaderSpace = emptySpace(" ", 14- header.length)
        firstRow = firstRow + header + afterHeaderSpace + "|"
    }

    
// function clear() {
//     READLINE.cursorTo(process.stdout, 0, 0);
//     READLINE.clearLine(process.stdout, 0);
//     READLINE.clearScreenDown(process.stdout);
// }   

    
//     console.log(clear())
    console.log(firstRow)
    console.log(separatorLine)
    
    for (let i = 0; i < rows.length; i = i + 1) {
        let row = rows[i]
        let line = "|"
        for (let j = 0; j < row.length; j = j + 1) {
            let afterRowSpace
            if (typeof row[j] == 'number') {
                
                afterRowSpace = emptySpace(" ", 20 - row[j].toString().length)
            }
             else {
                afterRowSpace = emptySpace(" ", 20 - row[j].length)
                
            }
            line = line + row[j] + afterRowSpace + "|"

        }

        console.log(line)
    }


    console.log(separatorLine)
}

const emptySpace = (space, times) => {
    let result = ""
    for (let i = 0; i < times; i = i + 1) {
        result = result + space
    }
    return result
}

module.exports = {
    'renderTable': renderTable
}

