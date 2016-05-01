function greetUser(user = {name : 'Anonymous'}){
	console.log('Hello ' + user.name);
}

greetUser();
greetUser({name : 'Sumit'});
