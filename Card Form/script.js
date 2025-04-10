const fee = localStorage.getItem("totalFee") || 0; // Default to 0 if no fee is stored

// Display the total fee
document.getElementById("Total").innerHTML = `Total: $${fee}`;

document.querySelector("#submit-button").addEventListener("click", function () {
    if (TopText && cardHolder && expiryDate && cardNumber && cvv) {
    alert("Thank you for registering!");
    // Clear localStorage after submission
    localStorage.removeItem("totalFee");
    window.location.replace("register.html");
    // Optionally, redirect to another page or perform other actions
    // window.location.href = "thank_you.html"; // Example redirect
    }
    else {
        alert("Please fill out all required fields.");
    }
});