
function addMenuToUi() {
    SpreadsheetApp.getUi()
      .createMenu('Practice')
        .addItem('Start', 'startPractice')
        .addItem('Stop', 'stopPractice')
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Minutes daily')
          .addItem('Update ', 'updateMinutesDaily'))
      .addToUi();
}

function startPractice() {
  var result = PracticeLog.startPractice();

  PracticeLog.focusLastRow();

  SpreadsheetApp.getActive().toast(result);
}


function stopPractice() {
  var result = PracticeLog.stopPractice();

  PracticeLog.focusLastRow();

  SpreadsheetApp.getActive().toast(result);
}

function updateMinutesDaily() {
  MinutesDaily.update();

  SpreadsheetApp.getActive().toast('Minutes daily updated');
}
