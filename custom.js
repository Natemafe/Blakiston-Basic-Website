const hamburger=document.querySelector('.hamburger-btn');
const navList=document.querySelector('.navList');
const navLinks=document.querySelectorAll('.navLink');

hamburger.addEventListener('click',()=>{
    navList.classList.toggle("open");
    navLinks.forEach(link=>{
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