function validateForm() {
    // Getting form values
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var age = document.forms["myForm"]["age"].value;

    // Name Validation: Check if the name field is not empty
    if (name === "") {
        alert("Name must be filled out");
        return false; // Prevent form submission
    }

    // Email Validation: Check if it's a valid email format
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password Validation: Check if password is at least 6 characters long
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Age Validation: Check if the age is a number and positive
    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age");
        return false;
    }

    // If all validations pass, allow the form submission
    alert("Form submitted successfully!");
    return true;
}
