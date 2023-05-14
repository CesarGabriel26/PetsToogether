let profile_nav = document.querySelector(".profile_nav")
let header = document.getElementById("Header");

let slider = document.querySelectorAll('.scrollContainer');

function DropDown() {
  if (profile_nav.classList.contains('active')) {
    profile_nav.classList.remove("active");
  } else {
    profile_nav.classList.add("active");
  }
}

function Scroll_to_view(Element) {
  var elemento = document.getElementById(Element);
  elemento.scrollIntoView()
}

/* Scroll Containers for midia cape */
slider.forEach(Slid => {
  Slid.addEventListener('mousedown', (e) => {
      isDown = true;
      Slid.classList.add('active');
      startX = e.pageX - Slid.offsetLeft;
      scrollLeft = Slid.scrollLeft;
  });
  Slid.addEventListener('mouseleave', () => {
      isDown = false;
      Slid.classList.remove('active');
  });
  Slid.addEventListener('mouseup', () => {
      isDown = false;
      Slid.classList.remove('active');
  });
  Slid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - Slid.offsetLeft;
      const walk = (x - startX) * 1;
      Slid.scrollLeft = scrollLeft - walk;
      console.log(walk);
  });
})
