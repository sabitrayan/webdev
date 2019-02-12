
var tasks = document.getElementById("tasks"); 
var task = document.getElementById("tk0");

function del(id){
    var child = id.parentNode.parentNode;
    child.parentNode.removeChild(child);
    console.log(child);
}


function add(){
    var taskName = document.getElementById("inp").value||document.getElementById("inp").placeholder;
    var newTask = task.cloneNode(true);
    newTask.style.display = "inline";
    newTask.getElementsByTagName("span")[0].innerHTML = taskName; 
    console.log(newTask);
     tasks.insertBefore(newTask, tasks.firstChild);
    document.getElementById("inp").value = "";
}
