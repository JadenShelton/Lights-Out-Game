//jQuery interactions

//step 1
$('h1').text("Jaden Shelton");
$('#step-indicator').text("Step 9");

//step 4
$('.strip-cell').on('click', function(){
    $('.strip-cell').removeClass('selected');
    $(this).addClass('selected');
    let oldColor = activeColor;
    activeColor = $(this).data('color');
    //step 9
    $('.game-cell.' + oldColor).each(function(){
        $(this).removeClass(oldColor);
        $(this).css("background-color", activeColor);
        $(this).addClass(activeColor);
    });
});

//step 5
$('#game-grid').on('click', '.game-cell', function(){
    let id = $(this).attr('id');
    let coords = id.replace('cell', '');
    let row = parseInt(coords.substring(0, 2));
    let col = parseInt(coords.substring(2, 4));

    colorCell(row, col);
    let directions = [[-1,0], [1,0], [0,-1], [0,1]];
    directions.forEach(function(dir) {
        let newRow = row + dir[0];
        let newCol = col + dir[1];
        if(newRow >= 0 && newRow <= 19 && newCol >= 0 && newCol <= 19) {
            colorCell(newRow, newCol);
        }
    });
});
