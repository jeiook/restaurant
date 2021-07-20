const nav = (() => {
	const render = (page, pageList) => {
		const nav = document.createElement("nav");
		pageList.forEach(e => {
			let div = document.createElement("div");
			div.textContent = e;
			nav.appendChild(div);
		});
		return nav;
	}
	return {
		render,
	}
})();

export default nav;
