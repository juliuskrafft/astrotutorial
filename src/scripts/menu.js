/*Der Code bewirkt, dass beim Klicken auf das Hamburger-Menü-Symbol das Navigationsmenü (das Element mit der Klasse nav-links) ein- und ausgeblendet wird. Dies geschieht durch das Hinzufügen oder Entfernen der CSS-Klasse expanded.*/

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});