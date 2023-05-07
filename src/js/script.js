const footerYear = document.querySelector(".nav-side__links-yeartext-year")

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();