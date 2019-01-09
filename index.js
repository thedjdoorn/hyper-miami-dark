'use strict';
const foregroundColor = '#FFFFFF';
const backgroundColor = '#15022a';
const red = '#F71735';
const green = '#4DB6AC';
const yellow = '#FFFC56';
const blue = '#03A9F4';
const magenta = '#fc17af';
const cyan = '#00BCD4';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#00BCD4',
	cursorColor: '#fc17af',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#ffffff',
		lightBlack: '#DBDEE0',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor,
	},
	css: `
		${config.css}
		.tab_active:before {
			border-color: rgba(0, 74, 83, 0.25);
		}
	`
});
