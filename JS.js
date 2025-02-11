const themeSelector = document.querySelector(".value"); // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
document.querySelector('#changeTheme').addEventListener("change", function() {
  if (this.value == "1") {
    
    document.body.classList.add("dark");
  }else{
     
     document.body.classList.remove("dark");
  }
});