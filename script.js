function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function downloadCV() {
  // Replace 'path/to/cv.pdf' with the actual path to your CV file
  var cvUrl = './assets/cv.pdf';
  var link = document.createElement('a');
  link.href = cvUrl;
  link.download = '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
