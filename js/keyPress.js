window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "65") {
        alert("The 'a' key is pressed.");
    }
}