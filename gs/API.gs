
function start(parameters) {
  var score = parameters.score;

  PracticeLog.startPractice(score);

  return 'Practice started with ' + score;
}


function stop() {
  PracticeLog.stopPractice();

  return 'Practice stopped';
}

function scores() {
  return Scores.list();
}

function stats() {
  return {
    rows: [
      ["Last session", PracticeLog.getLastDuration()],
      ["Average daily", MinutesDaily.getAverage()],
      ["Today", MinutesDaily.getToday()]
    ]
  };
}
