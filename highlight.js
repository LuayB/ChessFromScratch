var positions = document.getElementsByTagName('td');

//adds an event listener to each position to allow for highlighting
for (var i = 0; i < positions.length; i++) {
    positions[i].addEventListener('click', function() {
        highlightSquare(this);
    });
}

function highlightSquare(square) {
    var children = square.childNodes;

    //unhighlights the previous highlighted position
    for(var i = 0; i < positions.length; i++) {
        if(positions[i] != square && positions[i].classList.contains('highlight')) {
            positions[i].classList.remove('highlight');
        }
    }

    //highlights the new selected position
    for(var i = 0; i < children.length; i++) {
        if(children[i].tagName == 'IMG') {
            square.classList.toggle('highlight');
            break;
        }
    }
}
