function startPractice(score) {
  if (isStarted()) {
    return 'Practice was already started with ' + getScoreCell(getLastRow()).getValue();
  }

  // save last row
  var savedRow = getLastRow();

  //  appending new one
  var newRow = Common.appendCopyOfLastRow(getSheet());

  // set start time
  var startCell = getStartCell(newRow);
  startCell.setValue(Common.getCurrentDateTime());

  // force format to just time by copying from saved row
  Common.copyCellFormat(getStartCell(savedRow), startCell);

  // clear end time
  getEndCell(newRow).clearContent();

  // update score
  var scoreCell = getScoreCell(newRow);
  if (score) {
    scoreCell.setValue(score);
  }

  return 'Practice started with ' + scoreCell.getValue();
}

function stopPractice() {
  if (isStopped()) {
    return 'Practice was already stopped';
  }

  var lastRow = getLastRow();
  var endCell = getEndCell(lastRow);
  var startCell = getStartCell(lastRow);

  endCell.setValue(Common.getCurrentDateTime());

  // force format to just time by copying from start cell
  Common.copyCellFormat(startCell, endCell);

  return 'Practice stopped';
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

function isStarted() {
  return getEndCell(getLastRow()).isBlank();
}

function isStopped() {
  return !isStarted();
}

function pausePractice(callback) {
  if (isStopped()) {
    callback();
    return;
  }

  var lastRow = getLastRow();

  var endCell = getEndCell(lastRow);

  endCell.setValue(Common.getCurrentDateTime());

  callback();

  endCell.clearContent();
}

function getCurrentDuration() {
  if (isStopped()) {
    return null;
  }

  var duration;

  pausePractice(function() {
    duration = Common.formatTime(getDurationCell(getLastRow()).getValue());
  });

  return duration;
}

function getLastDuration() {
  if (isStarted()) {
    return null;
  }

  return Common.formatTime(getDurationCell(getLastRow()).getValue());
}
