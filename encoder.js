//created by Treyven Ambler


function encode(){//takes user input and encodes it through ASCII
    var userInput = document.getElementById('userText').value;
    var encodeData = window.btoa(userInput);
    var showData = document.getElementById('endResult').innerHTML = encodeData;
  }

function decode(){//takes user input and decodes ASCII.
    var userInput = document.getElementById('userText').value;
    var decodeData = window.atob(userInput);
    var showData = document.getElementById('endResult').innerHTML = decodeData;
}

function showCoords(coords){//Tells where on the page the mouse pointer is.
    var mouseCoords = document.getElementById('informCoords').innerHTML = "Your mouse is at: (" + coords.screenX + ", " + coords.screenY + ")";
    
}

document.addEventListener('mousemove', showCoords);
document.getElementById('encodeText').addEventListener('click', encode);
document.getElementById('decodeText').addEventListener('click', decode);
