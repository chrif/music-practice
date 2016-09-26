function update() {
    var sheet = MusicPractice.getMinutesDailySheet();

    var today = new Date();
    var lastDate = getLastDate();

    today.setHours(lastDate.getHours());
    today.setMinutes(lastDate.getMinutes());
    today.setSeconds(lastDate.getSeconds());
    today.setMilliseconds(lastDate.getMilliseconds());

    var fuse = 0;
    while (today > lastDate) {
        lastDate.setDate(lastDate.getDate() + 1);

        var newRow = Common.appendCopyOfLastRow(sheet);
        var newDate = Common.formatDate(lastDate);
        var dateCell = getDateCell(newRow);
        dateCell.setValue(newDate);

        fuse++;
        if (fuse > 100) {
            break;
        }
    }
}

function getLastDate() {
    var sheet = MusicPractice.getMinutesDailySheet();
    var lastRow = Common.getLastRow(sheet);
    var dateCell = getDateCell(lastRow);
    return dateCell.getValue();
}

function getDateCell(row) {
    return row.getCell(1,1);
}

