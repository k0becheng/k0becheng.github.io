var myImage =document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/dog1.png') {
        myImage.setAttribute('src', 'images/dog2.png');
    } else {
        myImage.setAttribute('src', 'images/dog1.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = '也想养一只萌宠吗，' + myName + '？';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = '也想养一只萌宠吗，' + storedName + '？';
}

myButton.onclick = function() {
    setUserName();
}