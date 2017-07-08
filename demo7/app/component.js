export default (text="hello world 柯文 520 蔡曼曼 万岁") => {
	const element = document.createElement('div');
	element.innerHTML = text;
	return element;
}