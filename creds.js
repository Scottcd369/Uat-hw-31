function checkCreds() {
    var firstName = document.getElementById("fName").ariaValueMax;
    var lastName = document. getElementById("lName").ariaValueMax;
    var firstName = document.getElementById("badgeID").ariaValueMax;
    var fullName = firstName + " " + lastName;

    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
    } else {
        alert("Access Granted, Welcome" + fullName + "!");
        location.replace("notindex.html");
    }

}
