import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import nav from './nav.js';

const state = (() => {
	let _content;
	let _currentPage = home;
	const _pageList = [home, menu, contact];
	const currentPage = () => _currentPage;
	const switchPage = (page) => {
		_currentPage = page;
		if (content()) {
			content().remove();
		}
		_content = document.createElement("div");
		content().id = "content";
		page.load(content(), nav.render(currentPage().name, 
			pageList()));
	};
	const pageList = () => _pageList;
	const content = () => _content;
	const init = () => {
		switchPage(contact);
	};
	return {
		currentPage,
		switchPage,
		pageList,
		content,
		init,
	}
})();

export default state;
