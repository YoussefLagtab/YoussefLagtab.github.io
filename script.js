const LIGHT_THEME = 'light theme';
const DARK_THEME = 'dark theme';

const themes = {
	[DARK_THEME]: {
		colors:{
			primary: 'whitesmoke',
			secondary: '#0e1013'
		}
	},
	[LIGHT_THEME]: {
		colors:{
			primary: '#0e1013',
			secondary: 'whitesmoke'
		}
	},
};

function saveTheme(theme) {
	chosenTheme = theme;
	localStorage.setItem('theme', theme);
}

function getTheme() {
	let theme = localStorage.getItem('theme')
	if (theme != LIGHT_THEME && theme != DARK_THEME)
		theme = DARK_THEME;
	return (theme);
}

function setThemeFunc(chosenTheme) {
	return function() {
		const body = document.getElementsByTagName('body')[0];
		const toggleThemeBtn = document.getElementById("toggleThemeBtn");
		const primaryColor = themes[chosenTheme].colors.primary
		const secondaryColor = themes[chosenTheme].colors.secondary
		saveTheme(chosenTheme);

		body.style.color = primaryColor;
		body.style.backgroundColor = secondaryColor;
		toggleThemeBtn.style.color = primaryColor;
		toggleThemeBtn.style.backgroundColor = secondaryColor;
	}
}

const setDarkTheme = setThemeFunc(DARK_THEME);
const setLightTheme = setThemeFunc(LIGHT_THEME);

const toggleTheme = () => {
	if (chosenTheme == LIGHT_THEME)
	{
		chosenTheme = DARK_THEME;
		setDarkTheme();
	}
	else
	{
		chosenTheme = LIGHT_THEME;
		setLightTheme();
	}
	saveTheme(chosenTheme);
}

document.getElementById("toggleThemeBtn").addEventListener('click', function() {
	toggleTheme();
	this.innerText = chosenTheme == DARK_THEME ? 'Light' : 'Dark';
});

// main

let chosenTheme = getTheme();
setThemeFunc(chosenTheme)();
