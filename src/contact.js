const contact = (() => {
	const contacts = [
		{"name": "Cheese Pizza",
			"title": "Regional Cheesy Manager",
			"phone": "123-456-7890",
			"email": "cheesy@arealpizza.com",
			"image": "https://www.blizzstatic.com/dynamicmedia/image/115/5b05e33bcc149.jpg?w=1200&zc=1",
		},
		{"name": "Pepperoni Pizza",
			"title": "Juicy Customer Service",
			"phone": "123-456-7891",
			"email": "peppy@arealpizza.com",
			"image": "https://cdn.toucharcade.com/wp-content/uploads/2016/05/Pepperoni-pizza.png",
		},
	];
	const entryDOM = (entry) => {
		const container = document.createElement("div");
		container.classList.add("contact-entry");
		const txtContainer = document.createElement("div");
		const name = document.createElement("h3");
		name.textContent = entry["name"];
		txtContainer.appendChild(name);
		const job = document.createElement("p");
		job.textContent = entry["title"];
		txtContainer.appendChild(job);
		const phone = document.createElement("p");
		phone.textContent = entry["phone"];
		txtContainer.appendChild(phone);
		const email = document.createElement("p");
		email.textContent = entry["email"];
		txtContainer.appendChild(email);
		const img = document.createElement("img");
		img.src = entry["image"];
		container.appendChild(txtContainer);
		container.appendChild(img);
		return container;
	};
	const contactsDOM = () => {
		const container = document.createElement("div");
		container.id = "contact-container";
		contacts.forEach(e => {
			container.appendChild(entryDOM(e));
		});
		return container;
	};
	const load = (content, nav) => {
		content.appendChild(nav);
		content.appendChild(contactsDOM());
		document.body.appendChild(content);
	};
	const name = "contact";
	return {
		load,
		name,
	}
})();

export default contact;