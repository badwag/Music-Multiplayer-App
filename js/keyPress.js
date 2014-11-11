document.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode && String.fromCharCode(charCode) == "a") {
        alert("Hey Cam, check out this A!");
    }
};