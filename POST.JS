POST /tasklists/{id}/tasks.json
{
  "todo-item": {
    "content": "Test Task",
    "notify": false,
    "description": "Test Task Sub Item",
    "estimated-minutes": "0",
    "private": 0,
    "grant-access-to": "",
    "priority": "low",
    "progress": "20",
    "attachments": [],
    "pendingFileAttachments": "",
    "responsible-party-id": 0,
    "predecessors": [
        {
            "id": 439492,
            "type": "complete"
        }
    ],
    "tags":"api,documentation",
    "positionAfterTask": -1
  }
}
var db = databoom("https://t504.databoom.space", "b504")
var payment = ($('input[name="payment"]:checked').val());     /*âîçâðàùàåò value ïåðåêëþ÷àòåëÿ îïëàòû*/
var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var statusPayment
var company = "corporationofevil";
var key = "twp_8PgauYOOtzMsUK8H42kTyu2znPLz";
var tasklist_id = "625460";
var due_date = +(date.getFullYear() + (month < 10 ? '0' : '') + month + (day < 10 ? '0' : '') + day) + 3;

var task_name = function (){ /*  ôîðìèðóåò òî, ÷òî îòáðàæàåòñÿ â teamwork ÂÛÇÛÂÀÅÒÑß ïðè íàæàòèè íà êíîïêó îòïðàâèòü ôóíêöèåé posttas */ 
var payment = ($('input[name="payment"]:checked').val());
var task_name = 'Íàèìåíîâàíèå: ' + document.getElementById('clientname').value + '. Êîë-âî: ' + 
document.getElementById('clientage').value + '. Òèï îïëàòû:' + payment;
return task_name;
};

function saveTask() {
            var task = "";
            
                db.save('tasklist', { text: task, done: false, date: new Date(), nnn: "gjkfds", kkk: "fsdf" })
                .done(function (data) { updateList(); $('#tb-new-task').val(''); })
                .fail(showError)
            
        }


var json = function() { /*ôîðìèðóåò ôàéë ñ íàçâàíèåì òîãî ÷òî îòáðàæàåòñÿ â teamwork è äàòó*/ 
	var json = {"todo-item": { "content": task_name(), "due-date": due_date, "completed": "true" }};
	return json;
}; 

