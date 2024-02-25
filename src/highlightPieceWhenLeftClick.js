var positions = document.getElementsByTagName('td');

//adds an event listener to each position to allow for highlighting
for (var i = 0; i < positions.length; i++) {
    positions[i].addEventListener('click', function() {
        highlightPiece(this);
    });
}

function highlightPiece(piece) {
    var children = piece.childNodes;

    //removes red highlighting to replace with piece highlighting
    if(piece.classList.contains('highlightLightSquareWithRed')) {
        piece.classList.remove('highlightLightSquareWithRed');
    }

    if(piece.classList.contains('highlightDarkSquareWithRed')) {
        piece.classList.remove('highlightDarkSquareWithRed');
    }

    //unhighlights the previous highlighted position
    for(var i = 0; i < positions.length; i++) {
        if(positions[i] != piece) {
            if(positions[i].classList.contains('highlightLightPieceWhenLeftClick')) {
                positions[i].classList.remove('highlightLightPieceWhenLeftClick');
            } else {
                positions[i].classList.remove('highlightDarkPieceWhenLeftClick');
            }
        }
    }

    //highlights the new selected position
    for(var i = 0; i < children.length; i++) {
        if(children[i].tagName == 'IMG') {
            if(piece.id == 'light-square') {
                piece.classList.toggle('highlightLightPieceWhenLeftClick');
            } else {
                piece.classList.toggle('highlightDarkPieceWhenLeftClick');
            }
            
            break;
        }
    }
}
