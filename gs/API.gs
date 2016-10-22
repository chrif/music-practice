
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
      ["Current session", PracticeLog.getCurrentDuration() || "Stopped"],
      ["Last session", PracticeLog.getLastDuration() || "Not stopped"],
      ["Average daily", MinutesDaily.getAverage()],
      ["Today", MinutesDaily.getToday()]
  ];
}
