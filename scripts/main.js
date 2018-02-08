
//Image Changer
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/emi.jpg') {
      myImage.setAttribute ('src','images/emi1.jpg');
    } else {
      myImage.setAttribute ('src','images/emi.jpg');
    }
}

//User NAme
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my site, , ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
