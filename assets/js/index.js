const hamburgerButton = document.querySelector('button.hamburger');
const hamburgerCollapseStyle = 'is-active';
const navBar = document.querySelector('nav');

function onHamburgerButtonClick(ev) {
  const navStyle = getComputedStyle(navBar);
  const navDisplay = navStyle.display === 'none'
    ? navBar.style.display = 'inline-block'
    : navBar.style.display = 'none';
  navBar.style.display = navDisplay;

  if (hamburgerButton.classList.contains(hamburgerCollapseStyle)) {
    hamburgerButton.classList.remove(hamburgerCollapseStyle);
  } else {
    hamburgerButton.classList.add(hamburgerCollapseStyle);
  }
}

hamburgerButton.addEventListener('click', onHamburgerButtonClick);
