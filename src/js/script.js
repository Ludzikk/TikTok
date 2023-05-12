const footerYear = document.querySelector(".nav-side__links-yeartext-year");
const amounts = document.querySelectorAll(
	".main__content-videobox-follow-buttons-button-amount"
);
const likeBtn = document.querySelectorAll(".heart");
const msgIcon = document.querySelector(".msg");
const lastMsgIcon = document.querySelector(".lastmsg");
const profileIcon = document.querySelector(
	".nav__links-list-item-profile-link-picture"
);
const followBtn = document.querySelectorAll(
	".main__content-videobox-follow-button"
);
const msgBack = document.querySelector(".main__messages-button");
const mainNormal = document.querySelector(".main__normal");
const mainMsg = document.querySelector(".main__messages");
const msgInput = document.querySelector(".main__messages-sendmsg-send-input");
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

const follow = () => {
	followBtn.forEach((btn) => {
		let clicked = false;
		btn.addEventListener("click", () => {
			if (clicked === false) {
				clicked = true;
				btn.classList.add("clicked-follow");
				btn.textContent = "Obserwuje";
			} else if (clicked === true) {
				clicked = false;
				btn.classList.remove("clicked-follow");
				btn.textContent = "Obserwuj";
			}
		});
	});
};

const switchToMsgSite = () => {
	mainMsg.classList.toggle("hidden");
	mainNormal.classList.toggle("hidden");
};

const createComment = () => {
	const date = new Date();
	const month = date.getUTCMonth();
	let monthName;

	if (month === 4) {
		monthName = "maja";
	}

	const dateText = document.createElement("p");
	const msg = document.createElement("p");
	const msgBox = document.createElement("div");
	const profilePic = document.createElement("img");
	const container = document.createElement("div");
	const chat = document.querySelector(".main__messages-sendmsg-msgbox");

	container.setAttribute("class", "main__messages-sendmsg-msgbox-reciver");

	profilePic.setAttribute("src", "./dist/img/profile2.jpg");
	profilePic.setAttribute("alt", "Profile Picture");
	profilePic.setAttribute(
		"class",
		"main__messages-sendmsg-msgbox-reciver-profile"
	);

	msgBox.setAttribute(
		"class",
		"main__messages-sendmsg-msgbox-reciver-container"
	);
	dateText.setAttribute("class", "main__messages-sendmsg-msgbox-reciver-date");
	msg.setAttribute("class", "main__messages-sendmsg-msgbox-reciver-msg");

	dateText.textContent = `${date.getDay()} ${monthName} ${date.getFullYear()} roku ${date.getHours()}:${date.getMinutes()}`;
	msg.textContent = msgInput.value;

	if (msg.textContent !== "") {
		chat.append(container);
		container.append(dateText, msgBox);
		msgBox.append(msg, profilePic);
		console.log(container);
		msgInput.value = "";
	}

	setTimeout(() => {
		createCommentSender()
	}, Math.floor(Math.random() * 4000 + 1000))
};

const createCommentSender = () => {
	const date = new Date();
	const month = date.getUTCMonth();
	let monthName;
	const messages = ["Siema", "No elo", "Kumulala", "Dobrze", "Jestem programistą HTML", "15k jako programista po 2 tygodniach", "Umiem html i css chyba zaczne rozsyłać cv", "Kup kurs", "Ale essa", "Kupiłem kota"];
	const randomMsg = Math.floor(Math.random() * messages.length);

	if (month === 4) {
		monthName = "maja";
	}

	const dateText = document.createElement("p");
	const msg = document.createElement("p");
	const msgBox = document.createElement("div");
	const profilePic = document.createElement("img");
	const container = document.createElement("div");
	const chat = document.querySelector(".main__messages-sendmsg-msgbox");

	container.setAttribute("class", "main__messages-sendmsg-msgbox-sending");

	profilePic.setAttribute("src", "./dist/img/profile1.jpg");
	profilePic.setAttribute("alt", "Profile Picture");
	profilePic.setAttribute(
		"class",
		"main__messages-sendmsg-msgbox-sending-profile"
	);

	msgBox.setAttribute(
		"class",
		"main__messages-sendmsg-msgbox-sending-container"
	);
	dateText.setAttribute("class", "main__messages-sendmsg-msgbox-sending-date");
	msg.setAttribute("class", "main__messages-sendmsg-msgbox-sending-msg");

	dateText.textContent = `${date.getDay()} ${monthName} ${date.getFullYear()} roku ${date.getHours()}:${date.getMinutes()}`;
	msg.textContent = msgInput.value;

		chat.append(container);
		container.append(dateText, msgBox);
		msgBox.append(profilePic, msg);
		console.log(container);
		msg.textContent = messages[randomMsg];
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

profileIcon.addEventListener("click", () => {
	const popup = document.querySelector(".profile__popup");
	popup.classList.toggle("hidden");
});

msgBack.addEventListener("click", switchToMsgSite);
msgIcon.addEventListener("click", () => {
	if (!mainNormal.classList.contains("hidden")) {
		switchToMsgSite();
	} else {
		return;
	}
});

msgInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter" && msgInput !== "") {
		createComment();
	} else {
		return;
	}
});

addRandomNum();
handleCurrentYear();
likeVideo();
follow();
