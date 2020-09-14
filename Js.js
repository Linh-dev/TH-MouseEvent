
function  init (){
    let imgObj = document.getElementById("ball");
    imgObj.style.position = "relative";
    imgObj.style.left = "0px";
    //imgObj.style.right = "0px";
}
function moveRight(){
    let imgObj = document.getElementById("ball");
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}
function moveLeft(){
    let imgObj = document.getElementById("ball");
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + "px";
}
window.onload = init;