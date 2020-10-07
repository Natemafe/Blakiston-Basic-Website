const hamburger=document.querySelector('.hamburger-btn');
const navLinks=document.querySelector('.navList');
const links=document.querySelectorAll('.navItem');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    });
});

const hamburgerBtn = document.querySelector('.hamburger-btn');
let hamburgerOpen = false;

hamburgerBtn.addEventListener('click', () => {
	if (!hamburgerOpen) {
		hamburgerBtn.classList.add('open');
		hamburgerOpen = true;
	} else {
		hamburgerBtn.classList.remove('open');
		hamburgerOpen = false;
	}
});