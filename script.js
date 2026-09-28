function getFormvalue() {
    let firstName = document.querySelector('[name="fname"]').value;
    let lastName = document.querySelector('[name="lname"]').value;

    alert(firstName.trim() + " " + lastName.trim());
}