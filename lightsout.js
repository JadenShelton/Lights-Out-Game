//game logic

//step 2
var activeColor = 'black';
var colorList = ['black', 'red', 'blue', 'yellow', 'green', 'purple', 'orange', 'cyan', 'magenta', 'gray'];

$('.strip-cell').each(function() {
    let cellColor = $(this).data('color');
    $(this).addClass(cellColor);
});

$('.strip-cell[data-color="black"]').addClass('selected'); //step 8

//step 3
for(let i = 0; i < 20; ++i) {
    let row = $('<tr>');
    for(let j = 0; j < 20; ++j) {
        let rowNum = String(i).padStart(2, '0');
        let colNum = String(j).padStart(2, '0');
        let cellId = 'cell' + rowNum + colNum;
        let cell = $('<td>').attr('id', cellId).addClass('game-cell');
        row.append(cell);
    }
    $('#game-grid').append(row);
}

//step 6
function colorCell(row, col) {
    let rowNum = String(row).padStart(2, '0');
    let colNum = String(col).padStart(2, '0');
    let id = '#cell' + rowNum + colNum;
    //step 7
    if($(id).hasClass(activeColor)) {
        $(id).removeClass(colorList.join(' '));
        $(id).css("background-color", 'white');
    } else {
        $(id).removeClass(colorList.join(' '));
        $(id).css("background-color", activeColor);
        $(id).addClass(activeColor);
    }
}