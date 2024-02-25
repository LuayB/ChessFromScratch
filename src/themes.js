var normalTheme = document.getElementById('normalTheme');
var purpleTheme = document.getElementById('purpleTheme');
var blueTheme = document.getElementById('blueTheme');

var lightSquares = document.getElementsByClassName('light-square');
var darkSquares = document.getElementsByClassName('dark-square');


normalTheme.addEventListener('click', function() {
    for (var i = 0; i < lightSquares.length; i++) {
        lightSquares[i].style.backgroundColor = '#E8ECCC';
    }

    for (var i = 0; i < darkSquares.length; i++) {
        darkSquares[i].style.backgroundColor = '#769955';
    }
});

purpleTheme.addEventListener('click', function() {
    for (var i = 0; i < lightSquares.length; i++) {
        lightSquares[i].style.backgroundColor = '#F1F1F1';
    }

    for (var i = 0; i < darkSquares.length; i++) {
        darkSquares[i].style.backgroundColor = '#8576BB';
    }
});

blueTheme.addEventListener('click', function() {
    for (var i = 0; i < lightSquares.length; i++) {
        lightSquares[i].style.backgroundColor = '#EAE8D3';
    }

    for (var i = 0; i < darkSquares.length; i++) {
        darkSquares[i].style.backgroundColor = '#4B7298';
    }
});