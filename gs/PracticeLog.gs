function startPractice(score) {
  // save last row before appending new one
  var savedRow = getLastRow();
  if (getEndCell(savedRow).isBlank()) {
    return 'Practice was already started with ' + getScoreCell(savedRow).getValue();
  }

  var newRow = Common.appendCopyOfLastRow(getSheet());
  var startCell = getStartCell(newRow);

  startCell.setValue(Common.getCurrentDateTime());

  // force format to just time by copying from saved row
  Common.copyCellFormat(getStartCell(savedRow), startCell);

  getEndCell(newRow).clearContent();

  var scoreCell = getScoreCell(newRow);
  if (score) {
    scoreCell.setValue(score);
  }

  return 'Practice started with ' + scoreCell.getValue();
}

function stopPractice() {
  var lastRow = getLastRow();
  var endCell = getEndCell(lastRow);
  var startCell = getStartCell(lastRow);

  if (endCell.isBlank()) {
    endCell.setValue(Common.getCurrentDateTime());

    // force format to just time by copying from start cell
    Common.copyCellFormat(startCell, endCell);

    return 'Practice stopped';
  }

  return 'Practice was already stopped';
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

function getScoreCell(row) {
  return row.getCell(1,5);
}

function getDurationCell(row) {
  return row.getCell(1,4);
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

function getLastDuration() {
  return Common.formatTime(getDurationCell(getLastRow()).getValue());
}
