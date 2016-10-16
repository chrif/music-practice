function startPractice() {
  // save last row before appending new one
  var savedRow = getLastRow();

  var newRow = Common.appendCopyOfLastRow(getSheet());
  var startCell = getStartCell(newRow);

  startCell.setValue(Common.getCurrentDateTime());

  // force format to just time by copying from saved row
  Common.copyCellFormat(getStartCell(savedRow), startCell);

  getEndCell(newRow).clearContent();
}

function stopPractice() {
  var lastRow = getLastRow();
  var endCell = getEndCell(lastRow);
  var startCell = getStartCell(lastRow);

  if (endCell.isBlank()) {
    endCell.setValue(Common.getCurrentDateTime());

    // force format to just time by copying from start cell
    Common.copyCellFormat(startCell, endCell);
  }
}

function getDateCell(row) {
  return row.getCell(1,1);
}

function getStartCell(row) {
  return row.getCell(1,2);
}

function getEndCell(row) {
  return row.getCell(1,3);
}

function getSheet() {
  return MusicPractice.getPracticeLogSheet();
}

function getLastRow() {
  return Common.getLastRow(getSheet());
}

function focusLastRow() {
  try {
    SpreadsheetApp.setActiveRange(getLastRow());
  } catch (e){}
}