function showPage(pageId) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

function signup() {
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful");
    showPage("login");
}

function login() {
    let user = JSON.parse(localStorage.getItem("user"));

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    if (user && email === user.email && pass === user.password) {
        alert("Login successful");
        showPage("home");
    } else {
        alert("Invalid credentials");
    }
}

// APPOINTMENT
function bookAppointment() {
    alert("Appointment booked successfully");
}
