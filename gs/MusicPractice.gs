
function getSpreadsheet() {
  return SpreadsheetApp.openById('1RxcUAL2_wpZIpb2kOM2y79cEBF-jlOz_eN_tDIdRjtA');
}

function getPracticeLogSheet() {
  return Common.getSheetById(getSpreadsheet(), 0);
}

function getMinutesDailySheet() {
  return Common.getSheetById(getSpreadsheet(), 385837546);
}

function getMinutesDailyPivot2() {
  return Common.getSheetById(getSpreadsheet(), 1357415941);
}

function getScoresSheet() {
  return Common.getSheetById(getSpreadsheet(), 1717294863);
}
