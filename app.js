const toggleSwitch = document.getElementById('theme-toggle');
const body = document.querySelector('body');
const container = document.querySelector('.container')
const socialLinks = document.querySelectorAll('.social-link')
const hoverText = document.querySelector('.social-link:hover')

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('light-mode');
    container.classList.add('light-mode');
    socialLinks.forEach((socialLink) => {
      socialLink.classList.add('light-mode')
    })
    hoverText.classList.add('light-mode')
  } else {
    body.classList.remove('light-mode');
    container.classList.remove('light-mode');
    socialLinks.forEach((socialLink) => {
      socialLink.classList.remove('light-mode')
    })
    hoverText.classList.remove('light-mode')
  }
});
