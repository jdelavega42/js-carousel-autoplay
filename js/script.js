// !const from HTML
const container = document.querySelector(".content");
const sidebar = document.querySelector(".thumbnails")
const chevronUp = document.querySelector(".up");
const chevronDown = document.querySelector(".down");
// !ARRAY
// state img array
const pictureArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
// print picture for every item in array
let containerElement = "";
let sidebarElement = "";
for (let i = 0; i < pictureArray.length; i++) {
    containerElement += `<div class="picture"><img src="${pictureArray[i]}"></div>`;
    sidebarElement += `<div class="preview"><img src="${pictureArray[i]}"></div>`;
}
container.innerHTML = containerElement;
sidebar.innerHTML = sidebarElement;
// get picture element
const itemsArray = document.getElementsByClassName("picture");
const bonusArray = document.getElementsByClassName("preview");
// set default active class to  a single picture element
let activePictureIndex = 0;
console.log(itemsArray[activePictureIndex]);
itemsArray[activePictureIndex].classList.add("active");
bonusArray[activePictureIndex].classList.add("active-thumbnails");

// change picture on click
chevronDown.addEventListener("click", function(){
    itemsArray[activePictureIndex].classList.remove("active");
    bonusArray[activePictureIndex].classList.remove("active-thumbnails");

    if(activePictureIndex === itemsArray.length - 1){
        activePictureIndex = 0;
    } else {
        activePictureIndex++;
    }
    itemsArray[activePictureIndex].classList.add("active");
    bonusArray[activePictureIndex].classList.add("active-thumbnails");

})
chevronUp.addEventListener("click", function(){
    itemsArray[activePictureIndex].classList.remove("active");
    bonusArray[activePictureIndex].classList.remove("active-thumbnails");

    if(activePictureIndex === 0){
        activePictureIndex = (itemsArray.length - 1);
    } else {
        activePictureIndex--;
    }
    itemsArray[activePictureIndex].classList.add("active");
    bonusArray[activePictureIndex].classList.add("active-thumbnails");
})