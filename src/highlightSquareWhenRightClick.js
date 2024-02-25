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
    if(square.id == 'light-square') {
        square.classList.toggle('highlightLightSquareWithRed');
    } else {
        square.classList.toggle('highlightDarkSquareWithRed');
    }

    //removes all piece highlighting to replace with red highlighting
    for (var i = 0; i < positions.length; i++) {
        if(positions[i].classList.contains('highlightLightPieceWhenLeftClick')) {
            positions[i].classList.remove('highlightLightPieceWhenLeftClick');
        }

        if(positions[i].classList.contains('highlightDarkPieceWhenLeftClick')) {
            positions[i].classList.remove('highlightDarkPieceWhenLeftClick');
        }
    }
}