const exampleRows = [ 
    ['pork meat', 670, '22/02/2020'],// first row
    ['tomatos', 400, '22/02/2020'],
    ['yogurt', 300, '22/02/2020'],
    ['oats', 300, '22/02/2020'],
    ['tomatossoso', 490, '22/02/2020'],
    ['yogurttutut', 900, '22/02/2020'],
    ['oatseee', 100, '22/02/2020'],
    ['tomatos', 400, '22/02/2020'],
    ['yogt', 300, '22/02/2020'],
    ['oas', 300, '22/02/2020'],
    ['tomso',99999999, '22/02/2020'],
    ['yutut', 350, '22/02/2020'],
    ['seee', 100, '22/02/2020'],
    

]

const emptySpace = (space, times) => {
    let result = ""
    for(let i = 0; i < times; i = i + 1) {
        result = result + space
    }
    return result
}

const renderTable = (rows) => {
    let meal  = "meal"
    let grams = "grams"
    let date = "date"
    let afterMealSpace = emptySpace(" ", 20 - meal.length)
    let afterGramsSpace = emptySpace(" ", 20 - grams.length)
    let afterDateSpace = emptySpace(" ", 20 - date.length)
    let bbb = emptySpace("-", 63)

    let firstRow = meal + afterMealSpace + "|" + grams + afterGramsSpace + "|" + date + afterDateSpace + "|"
    
    console.log(firstRow)
    console.log(bbb)
     

    for(i = 0; i < exampleRows.length; i = i + 1) {
       let firstColumn = exampleRows[i][0]
       let secondColumn = exampleRows[i][1]
       let thirtColumn = exampleRows[i][2]

       let afterIndexSpace = emptySpace(" ", 20 - firstColumn.length)
       let afterSometh2Space = emptySpace(" ", 20 - secondColumn.toString().length)// fix
       let afterSometh3Space = emptySpace(" ", 20 - thirtColumn.length)

      
       let table = firstColumn + afterIndexSpace + "|" + secondColumn + afterSometh2Space + "|" + thirtColumn + afterSometh3Space + "|"

       console.log(table)
    }

    
    
}

renderTable(exampleRows)




