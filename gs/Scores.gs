function list() {
  return getSheet().getRange('A:A').getValues();
}

function getSheet() {
  return MusicPractice.getScoresSheet();
}

