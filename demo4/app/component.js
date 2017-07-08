export default (text="hello world 柯文万岁") => {
	const element = document.createElement('div');
	element.innerHTML = text;
	return element;
}