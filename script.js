document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Hamza Ahmed" && password === "admin") {
        window.location.href = "yourwebsitehomepage.html";
    } else {
        alert("Invalid credentials!");
    }
});
