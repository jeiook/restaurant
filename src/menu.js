const menu = (() => {
	const menu = [
		{"name": "Margherita", 
			"price": 14,
			"description": "Fresh mozzarella, Tomato Sauce, Basil"},
		{"name": "Vegan Margherita", 
			"price": 14,
			"description": "Housemade Vegan Mozzarella (Cashew), Tomato Sauce"},
		{"name": "Honey Bear", 
			"price": 14.5,
			"description": "Ricotta, Mozzarella, Provolone, Sausage, Honey, \
				Calabrian Chile, Bee Pollen"},
		{"name": "Heirloom Tomato", 
			"price": 16,
			"description": "Ricotta, Basil, Olive Oil"},
	];
	const entryDOM = (entry) => {
		const box = document.createElement("div");
		const first = document.createElement("p");
		first.textContent = `${entry["name"]} ${entry["price"]}`;
		first.classList.add("menu-title");
		const desc = document.createElement("p");
		desc.textContent = entry["description"];
		box.appendChild(first);
		box.appendChild(desc);
		return box;
	};
	const menuDOM = () => {
		const container = document.createElement("div");
		// container.id = "";
		const elements = [];
		const title = document.createElement("h2");
		title.textContent = "PIZZA";
		elements.push(title);
		elements.push(document.createElement("hr"));
		elements.push(document.createElement("br"));
		menu.forEach(e => {
			elements.push(entryDOM(e));
		});
		elements.forEach(e => {
			container.appendChild(e);
		});
		return container;
	};
	const load = (content, nav) => {
		content.appendChild(nav);
		content.appendChild(menuDOM());
		document.body.appendChild(content);
	}
	const name = "menu";
	return {
		load,
		name,
	}
})();

export default menu;
