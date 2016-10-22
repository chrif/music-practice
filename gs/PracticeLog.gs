function startPractice(score) {
  // save last row before appending new one
  var savedRow = getLastRow();

  var newRow = Common.appendCopyOfLastRow(getSheet());
  var startCell = getStartCell(newRow);

  startCell.setValue(Common.getCurrentDateTime());

  // force format to just time by copying from saved row
  Common.copyCellFormat(getStartCell(savedRow), startCell);

  getEndCell(newRow).clearContent();

  if (score) {
    getScoreCell(newRow).setValue(score);
  }
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

function getScoreCell(row) {
  return row.getCell(1,5);
}

function getDurationInMinutesCell(row) {
  return row.getCell(1,7);
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
  var lastRow = getLastRow();
  var date = Common.formatDate(getStartCell(lastRow).getValue());
  var duration = Common.formatTime(getDurationCell(lastRow).getValue());

  if (Common.getCurrentDate() == date) {
    date = 'today';
  }

  return duration;
}
