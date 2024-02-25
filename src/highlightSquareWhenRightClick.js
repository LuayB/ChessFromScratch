var positions = document.getElementsByTagName('td');

//adds an event listener to each position to allow for highlighting
for (var i = 0; i < positions.length; i++) {
    positions[i].addEventListener('contextmenu', function(event) {
        event.preventDefault();
        highlightSquareWithRed(this);
    });
}

//highlights light and dark squares with different shades of red
function highlightSquareWithRed(square) {
    //removes piece highlighting to replace with red highlighting
    if(square.classList.contains('highlightLightPieceWhenLeftClick')) {
        square.classList.remove('highlightLightPieceWhenLeftClick');
    }

    if(square.classList.contains('highlightDarkPieceWhenLeftClick')) {
        square.classList.remove('highlightDarkPieceWhenLeftClick');
    }

    if(square.id == 'light-square') {
        square.classList.toggle('highlightLightSquareWithRed');
    } else {
        square.classList.toggle('highlightDarkSquareWithRed');
    }
}