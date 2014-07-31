
$(function (){
	var task_tags = $("#_subRoomTaskList>li");
	localStorage = chrome.storage.local;

	var text, id;
	var tasks = [];
	var nyr_tasks = []; //Not Yet Read tasks.
	for (var i = 0; i < task_tags.length; i++){
		id = $(task_tags[i]).attr("data-task-id");
		text = $(task_tags[i]).text();
		var task = {
			id: id,
			text: text,
		};
		tasks.push(task);

		if (!localStorage.getItem(id)){
			nyr_tasks.push(task);
			/*
			var add = {};
			add[id] = true;
			*/
			localStorage.setItem(id, true);
		}
	}

	console.log(tasks);
	console.log(nyr_tasks);
});
