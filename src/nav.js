import state from './state.js';

const nav = (() => {
	const render = (page, pageList) => {
		const nav = document.createElement("nav");
		pageList.forEach(e => {
			let btn = document.createElement("button");
			btn.textContent = e.name;
			btn.onclick = event => {
				state.switchPage(e);
			}
			nav.appendChild(btn);
		});
		return nav;
	}
	return {
		render,
	}
})();

export default nav;
