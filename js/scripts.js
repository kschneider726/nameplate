// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
// FOR GITHUB CHANGE TO $.backstretch('nameplate/img/bg.jpg');
$.backstretch('/img/bgNameplate.jpg');

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
    // DEFAULT COLUMN WIDTH
	columnWidth: 200,
	gutter: 10,
	isFitWidth: true
});