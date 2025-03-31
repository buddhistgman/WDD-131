const MenuzButton = document.getElementById("menuButton");
    const navList = document.getElementById("navlist");
    MenuzButton.addEventListener("click", function() {
      navList.classList.toggle("hide");
    });
    function handleResize() {
      if (window.innerWidth > 1000) {
        MenuzButton.classList.add("hide");
        navList.classList.remove("hide"); // Ensure navigation is visible
        MenuzButton.setAttribute('aria-expanded', 'true');
        navList.setAttribute('aria-hidden', 'false');
      } else {
        MenuzButton.classList.remove("hide");
        navList.classList.add('hide');
        menuButton.setAttribute('aria-expanded', 'false');
        navList.setAttribute('aria-hidden', 'true');
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})
lightbox.addEventListener('click', e=> {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})