function isPiece(square) {
    var children = square.childNodes;

    for(var i = 0; i < children.length; i++) {
        if(children[i].tagName == 'IMG') {
            return(true);
        }
    } return(false);
}