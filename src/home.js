const home = (() => {
	const load = (content, nav) => {
		const elements = [nav];
		const img = document.createElement("img");
		img.src = "https://3.bp.blogspot.com/-T24NylIOBzs/Tflj7czaT0I/AAAAAAAABp8/xTExtb-UkFU/s1600/pitfire.jpg";
		img.classList.add("logo");
		elements.push(img);
		elements.forEach(e => {
			content.appendChild(e);
		});
		document.body.appendChild(content);
	}
	const name = "home";
	return {
		load,
		name,
	}
})();

export default home;
