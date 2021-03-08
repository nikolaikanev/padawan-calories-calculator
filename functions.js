// const READLINE = require('readline');

const renderTable = (rows, headers) => {
  const cellLength = 20
  let separatorLine = emptySpace("-", headers.length * (cellLength + 1) + 1);

  let firstRow = "|";
  for (let i = 0; i < headers.length; i = i + 1) {
    let header = headers[i];
    let afterHeaderSpace = emptySpace(" ", cellLength - header.length);
    firstRow = firstRow + header + afterHeaderSpace + "|";
  }

  console.log(firstRow);
  console.log(separatorLine);

  for (let i = 0; i < rows.length; i = i + 1) {
    let row = rows[i];
    let line = "|";
    for (let j = 0; j < row.length; j = j + 1) {
      let cell = row[j];
      let afterRowSpace;

      if (typeof cell === "number") {
        afterRowSpace = emptySpace(" ", cellLength - cell.toString().length);
      } else {
        if (cell.length > 20) {
          cell = cell.slice(0, 17) + '...'
        }
        afterRowSpace = emptySpace(" ", cellLength - cell.length);
      }

      line = line + cell + afterRowSpace + "|";
    }

    console.log(line);
  }

  console.log(separatorLine);
};

const emptySpace = (space, times) => {
  let result = "";
  for (let i = 0; i < times; i = i + 1) {
    result = result + space;
  }
  return result;
};

module.exports = {
  renderTable: renderTable,
};
