import home from './home.js';

const state = (() => {
	let _content;
	let _currentPage = 'home';
	const _pageList = ['home', 'menu', 'contact'];
	const currentPage = () => _currentPage;
	const switchPage = (page) => {
		_currentPage = page;
	};
	const pageList = () => _pageList;
	const content = () => _content;
	const init = () => {
		_content = document.createElement("div");
		content().id = "content";
		switchPage('home');
		home.load(content());
	};
	const reset = () => {
		content().remove();
	};
	return {
		currentPage,
		switchPage,
		pageList,
		content,
		init,
		reset,
	}
})();

export default state;
