document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('B').style.display = 'none';
});

function T(A, B) {
    var element1 = document.getElementById(A);
    var element2 = document.getElementById(B);
    
    if (element1 && element2) {
        if (element1.style.display === "none") {
            element1.style.display = "block";
            element2.style.display = "none";
        } else {
            element1.style.display = "none";
            element2.style.display = "block";
        }
    }
}
console.log("conneted");