//console.log('page loaded');

console.log(document);

document.getElementById('save').onclick = function () {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	var email = document.querySelector('#userForm input[type="email"]');
	let password = document.querySelector('#userForm input[type="password"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value+ " " +email.value+" "+password.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
};
document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	var name = document.querySelector('#userForm input[type="text"]').value;

	var password = document.querySelector('#userForm input[type="password"]').value;
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email+" "+name+" "+password;
	document.querySelector('#summary h1').innerHTML = name+ " " +email+" "+password;
};
document.querySelector('#userForm input[type="password"]').onkeyup = function () {
	var name = document.querySelector('#userForm input[type="text"]').value;

	var password = document.querySelector('#userForm input[type="password"]').value;
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email+" "+name+" "+password;
	document.querySelector('#summary h1').innerHTML = name+ " " +email+" "+password;
};
document.querySelector('#userForm input[type="text"]').onkeyup = function () {
	var name = document.querySelector('#userForm input[type="text"]').value;

	var password = document.querySelector('#userForm input[type="password"]').value;

	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email+" "+name+" "+password;
	document.querySelector('#summary h1').innerHTML = name+ " " +email+" "+password;
};
/*
function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}

 */