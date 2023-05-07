const footerYear = document.querySelector(".nav-side__links-yeartext-year");
const amounts = document.querySelectorAll(
	".main__content-videobox-follow-buttons-button-amount"
);
const likeBtn = document.querySelectorAll(".heart");
const msgIcon = document.querySelector(".msg");
const lastMsgIcon = document.querySelector(".lastmsg");
const profileIcon = document.querySelector(".nav__links-list-item-profile-link-picture")
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

msgIcon.addEventListener("mouseenter", () => {
	const popup = msgIcon.firstElementChild;
	popup.classList.toggle("hidden");
});

msgIcon.addEventListener("mouseleave", () => {
	const popup = msgIcon.firstElementChild;
	popup.classList.toggle("hidden");
});

lastMsgIcon.addEventListener("mouseenter", () => {
	const popup = lastMsgIcon.lastElementChild;
	popup.classList.toggle("hidden");
});

lastMsgIcon.addEventListener("mouseleave", () => {
	const popup = lastMsgIcon.lastElementChild;
	popup.classList.toggle("hidden");
});

profileIcon.addEventListener("mouseenter", () => {
	const popup = document.querySelector(".profile__popup")
	popup.classList.toggle("hidden");
});

profileIcon.addEventListener("mouseleave", () => {
	const popup = document.querySelector(".profile__popup")
	popup.classList.toggle("hidden");
});

addRandomNum();
handleCurrentYear();
likeVideo();
