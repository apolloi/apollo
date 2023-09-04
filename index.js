buttonLinks = [
'https://www.google.com/search?q=%EB%8C%80%EA%B5%90%EC%A3%BC%EA%B0%80&sca_esv=562513523&ei=Ar31ZJH8OoPZ1e8Pn5upaA&ved=0ahUKEwiRhdra6pCBAxWDbPUHHZ9NCg0Q4dUDCBA&uact=5&oq=%EB%8C%80%EA%B5%90%EC%A3%BC%EA%B0%80&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgzrjIDqtZDso7zqsIAyBRAAGIAEMgUQABiABEjHH1DHBlivHHAGeAGQAQOYAbsBoAGkC6oBBDAuMTC4AQPIAQD4AQGoAgrCAgoQABhHGNYEGLADwgIHEAAYigUYQ8ICBxAuGIoFGEPCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAhoQABiKBRjqAhi0AhiKAxi3AxjUAxjlAtgBAcICHRAAGIoFGOoCGLQCGIoDGLcDGNQDGOUCGIsD2AEBwgIEEAAYA8ICBxAAGIAEGArCAggQLhiABBixA8ICGhAuGIAEGLEDGIMBGJcFGNwEGN4EGOAE2AECwgIFEC4YgATCAiAQLhiABBixAxiDARjHARjRAxiXBRjcBBjeBBjgBNgBAsICCxAuGIAEGMcBGK8BwgICECbCAgYQABgFGB7iAwQYACBBiAYBkAYKugYECAEYB7oGBggCEAEYFA&sclient=gws-wiz-serp&bshm=rimc/1'
	//...
];

document.querySelectorAll('button#link').forEach((button, index) => {
	button.addEventListener('click', () => {
		let link = buttonLinks[index] ? buttonLinks[index] : '/';
		document.location.href = link;
	});
});
