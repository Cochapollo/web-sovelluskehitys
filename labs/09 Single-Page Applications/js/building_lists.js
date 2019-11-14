
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('table');
var headings = document.createElement('tr');
var title1 = document.createElement('th');
var year1 = document.createElement('th');
title1.innerHTML = "Title";
year1.innerHTML = "Year of publication";
headings.appendChild(title1);
headings.appendChild(year1);
list.appendChild(headings)
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('tr');
	var title = document.createElement('td');
	var year = document.createElement('td');
	item.appendChild(title);
	item.appendChild(year);
	title.innerHTML = books[i].title;
	year.innerHTML = books[i].year;
	list.appendChild(item);
}
document.body.appendChild(list);
