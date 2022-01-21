const {app, BrowserWindow } = require('electron');

let window;


app.on('ready', () => {
	window = new BrowserWindow({
		width: 800,
		height: 600,
		icon: __dirname + '/public/news.png',
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true
		}
	});
	window.loadURL('https://better-news.herokuapp.com');
})
