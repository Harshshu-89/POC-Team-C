window.onload = function() {
    let name = localStorage.getItem("customerName");
    let email = localStorage.getItem("customerEmail");
    let phone = localStorage.getItem("customerPhone");

    if (name) document.getElementById("customerName").textContent = name;
    if (email) document.getElementById("customerEmail").textContent = email;
    if (phone) document.getElementById("customerPhone").textContent = phone;
};

function editProfile() {
    let name = prompt("Enter new name:", document.getElementById("customerName").textContent);
    let email = prompt("Enter new email:", document.getElementById("customerEmail").textContent);
    let phone = prompt("Enter new phone:", document.getElementById("customerPhone").textContent);
    
    if (name) {
        document.getElementById("customerName").textContent = name;
        localStorage.setItem("customerName", name);
    }
    if (email) {
        document.getElementById("customerEmail").textContent = email;
        localStorage.setItem("customerEmail", email);
    }
    if (phone) {
        document.getElementById("customerPhone").textContent = phone;
        localStorage.setItem("customerPhone", phone);
    }
}