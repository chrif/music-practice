
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
      ["Today", MinutesDaily.getToday()],
      ["Average daily", MinutesDaily.getAverage()]
  ];
}
