function validateform() {
    var fname = document.myform.fname.value;
    var lname = document.myform.lname.value;
    var email = document.myform.email.value;
    var password = document.myform.password.value;

    if (fname == null || fname == "") {
        alert("firstName can't be blank");
        return false;
    } else
        if (lname == null || lname == "") {
        alert("lastName can't be blank");
        return false;
    } else
        if (email == null || email == "") {
        alert("email can't be blank");
        return false;
    } else
        if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}
console.log("file is conneted");