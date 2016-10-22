
function start(parameters) {
  return PracticeLog.startPractice(parameters.score);
}

function stop() {
  return PracticeLog.stopPractice();
}

function scores() {
  return Scores.list();
}

function stats() {
  return [
      ["Last session", PracticeLog.getLastDuration()],
      ["Average daily", MinutesDaily.getAverage()],
      ["Today", MinutesDaily.getToday()]
  ];
}
