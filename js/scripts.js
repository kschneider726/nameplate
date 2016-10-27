// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
// FOR GITHUB CHANGE TO $.backstretch('nameplate/img/bg.jpg');
$.backstretch('https://github.com/kschneider726/nameplate/blob/gh-pages/img/bgNameplate.jpg?raw=true');

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
    // DEFAULT COLUMN WIDTH
	columnWidth: 200,
	gutter: 10,
	isFitWidth: true
});
