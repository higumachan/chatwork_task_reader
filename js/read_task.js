
$(function (){
	var tasks = $("#_subRoomTaskList ._taskNameContent");

	for (var i = 0; i < tasks.length; i++){
		console.log($(tasks[i]).text());
	}
});
