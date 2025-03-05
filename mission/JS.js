const themeSelector = document.querySelector("#themeSelector");

themeSelector.addEventListener("change", function() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        // Add code here to change the logo in dark mode if needed.  Example:
        document.querySelector('.byuimage').src = "byui-logo_white.jpg"; 
    } else {
        document.body.classList.remove("dark");
        // Add code here to change the logo back to light mode. Example:
        document.querySelector('.byuimage').src = "byui-logo_blue.jpg";
    }
});