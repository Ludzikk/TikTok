const footerYear = document.querySelector(".nav-side__links-yeartext-year");
const amounts = document.querySelectorAll(
	".main__content-videobox-follow-buttons-button-amount"
);
const likeBtn = document.querySelectorAll(".heart");
let num;

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const addRandomNum = () => {
	amounts.forEach((amount) => {
		num = Math.floor(Math.random() * 5000);
		amount.textContent = num;
	});
};

const likeVideo = () => {
	likeBtn.forEach((like) => {
		let clicked = false;
		like.addEventListener("click", () => {
			const child = like.lastElementChild;
			const icon = like.firstElementChild;
			let amountNum = parseInt(child.textContent);

			if (clicked === false) {
				amountNum++;
				icon.classList.add("pink");
				clicked = true;
			} else {
				amountNum--;
				icon.classList.remove("pink");
				clicked = false;
			}
			child.textContent = amountNum;
		});
	});
};

addRandomNum();
handleCurrentYear();
likeVideo();
