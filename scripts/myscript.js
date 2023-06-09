var carImage =document.querySelector('img');

/*Image Changer */
carImage.onclick=function(){
    var myImage= carImage.getAttribute('src');
    if(myImage==='images/gti1.jpg'){
        carImage.setAttribute('src','images/cockpit.jpg');

    }
    else{
        carImage.setAttribute('src','images/gti1.jpg');
    }
}

/*Personalized welcome ma=essage*/

var nameButton =document.querySelector('button');
var myHeading =document.querySelector('h1');

function setUserName(){
    'use strict';
    var myName=window.prompt('Please enter your name: ');
    localStorage.setItem('name',myName);
    myHeading.textContent='Welcome '+myName
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName=localStorage.getItem('name');
    myHeading.textContent='Welcome '+storedName;
}
nameButton.onclick=function(){
    'use strict';
    setUserName();
}

