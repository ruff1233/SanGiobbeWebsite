window.onload = function() {
    var btn = document.getElementById("recbtn");
    btn.innerHTML = "Remove Clickable Boxes";
}

function toggleRec() {
    var btn = document.getElementById("recbtn");
    var rectangles = document.getElementsByClassName("rectangle");
    if(btn.innerHTML == "Remove Clickable Boxes") {
        btn.innerHTML = "Add Clickable Boxes";
        for(var i = 0; i < rectangles.length; i++) {
            rectangles[i].style.display = "none";
        }
    } else {
        btn.innerHTML = "Remove Clickable Boxes";
        for(var i = 0; i < rectangles.length; i++) {
            rectangles[i].style.display = "block";
        }
    }
}