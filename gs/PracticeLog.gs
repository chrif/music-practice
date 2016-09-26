function startPractice() {
    var sheet = MusicPractice.getPracticeLogSheet();

    // save last row before appending new one
    var savedRow = Common.getLastRow(sheet);

    var newRow = Common.appendCopyOfLastRow(sheet);
    var startCell = getStartCell(newRow);

    startCell.setValue(Common.getCurrentDateTime());

    // force format to just time by copying from saved row
    Common.copyCellFormat(getStartCell(savedRow), startCell);

    getEndCell(newRow).clearContent();
}

function stopPractice() {
    var sheet = MusicPractice.getPracticeLogSheet();
    var lastRow = Common.getLastRow(sheet);
    var endCell = getEndCell(lastRow);
    var startCell = getStartCell(lastRow);

    if (endCell.isBlank()) {
        endCell.setValue(Common.getCurrentDateTime());

        // force format to just time by copying from start cell
        Common.copyCellFormat(startCell, endCell);
    }
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
