const MenuzButton = document.getElementById("menuButton");
    const navList = document.getElementById("navlist");
    MenuzButton.addEventListener("click", function() {
      navList.classList.toggle("hide");
    });

    function handleResize() {
      if (window.innerWidth > 1000) {
        MenuzButton.classList.add("hide");
        navList.classList.remove("hide"); // Ensure navigation is visible
      } else {
        MenuzButton.classList.remove("hide");
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
