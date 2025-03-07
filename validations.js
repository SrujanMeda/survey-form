var a = 0;

function mouseOver() {
    const name = document.forms['suform']['name'].value;
    const email = document.forms['suform']['email'].value;
    const role = document.forms['suform']['dropdown'].value;
    const emailcheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    document.getElementById('submit').style.border = "2px solid #37af65";

    if (name == "" || !email.match(emailcheck) || role == "" && a == 0) {
        document.getElementById('submit').style.background = "url(./Asserts/Images/cracks.png)";
        document.getElementById('submit').style.backgroundSize = "cover";
        document.getElementById('submit').style.border = "2px solid rgb(136, 8, 8)";
        document.getElementById('submit').style.color = "transparent";
        a = 1;
        return false;
    } else {
        return true;
    }
}

function resetBtn() {
    document.getElementById('submit').style.background = "url(./Asserts/Images/nocracks.png)";
    document.getElementById('submit').style.boxShadow = "none";
    document.getElementById('submit').style.color = "white";
    document.getElementById('submit').style.border = "2px solid #37af65";
    a = 0;
}

function validateForm() {
    const name = document.forms['suform']['name'].value;
    const email = document.forms['suform']['email'].value;
    const role = document.forms['suform']['dropdown'].value;
    const recommendation = document.forms['suform']['recommend'].value;
    const emailcheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    let isValid = true;

    if (name == "") {
        document.getElementById('nameError').textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    if (!email.match(emailcheck)) {
        document.getElementById('emailError').textContent = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    if (role == "") {
        document.getElementById('roleError').textContent = "Role selection is required.";
        isValid = false;
    } else {
        document.getElementById('roleError').textContent = "";
    }

    if (recommendation == "") {
        document.getElementById('recommendationError').textContent = "Recommendation is required.";
        isValid = false;
    } else {
        document.getElementById('recommendationError').textContent = "";
    }

    if (!isValid) {
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}
