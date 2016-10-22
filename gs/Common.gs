function getSheetById(spreadsheet, id) {
  var sheets = spreadsheet.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    if (id == sheet.getSheetId()) {
      return sheet;
    }
  }
  return null;
}

function getLastRow(sheet) {
  return sheet.getRange(sheet.getLastRow(), 1, 1, sheet.getLastColumn());
}

function copyCellFormat(sourceCell, targetCell) {
  sourceCell.copyFormatToRange(targetCell.getSheet(), targetCell.getColumn(), targetCell.getLastColumn(), targetCell.getRow(), targetCell.getLastRow());
}

function appendCopyOfLastRow(sheet) {
  var lastRow = getLastRow(sheet);

  sheet.insertRowsAfter(sheet.getLastRow(), 1);
  var newRow = sheet.getRange(sheet.getLastRow() + 1, 1, 1, sheet.getLastColumn());
  lastRow.copyTo(newRow);

  return newRow;
}

function getCurrentDateTime() {
  var now = new Date();
  var dateTime = formatDateTime(now);
  return dateTime;
}

function getCurrentTime() {
  var now = new Date();
  var time = formatTime(now);
  return time;
}

function getCurrentDate() {
  var now = new Date();
  var date = formatDate(now);
  return date;
}

function formatDateTime(date) {
  return formatDate(date) + ' ' + formatTime(date);
}

function formatTime(date) {
  return pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':00';
}

function formatDate(date) {
  return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
}

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}
