var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room') || 'No Room Allocated';
var $room_name = jQuery('.room-title');
$room_name.text(room);
console.log(room);
console.log(name + " " +"wants to join" + " " + room);
var socket = io();

socket.on('connect' , function(){
console.log('Socket connection established from client side!!!');
socket.emit('joinRoom' ,{
	name : name,
	room : room
});
//alert("Connected");

});

socket.on('message' , function(message){
	console.log('Message Recived');
	var momenttimestamp = moment.utc(message.timestamp);
	console.log(message.text);
	var $message = jQuery('.messages');
	$message.append('<p><strong>'+message.name+ ' ' + momenttimestamp.local().format('hh:mm a')+ '</strong></p>');
	$message.append('<p>'+message.text+'</p>');

});


var $form = jQuery('#message-form');
var $message = $form.find('input[name=message]')
$form.on('submit' , function(event){
	event.preventDefault();
	socket.emit('message' , {
		name: name,
		text : $message.val()
	})
	console.log('We are inside form event');
	$message.val('');
})