getMyList();
function printlist(obj) {

    var mytodoElement = document.getElementById('mytodo');
    mytodoElement.innerHTML = "";
    for (var i = 0; i < obj.length; i++) {
        var li = document.createElement('tr');
        if(obj[i].status=="ACTIVE") {
            li.innerHTML = "<td>"+obj[i].title+"</td>";
            li.innerHTML+="   <td><a style='color:green;cursor: pointer;' onclick='complete("+i+")'>Mark as Complete</a></td>  <td><a style='color:red;cursor: pointer;' onclick='deletetodo("+i+")'>Delete</a> </td> ";
        }
        else if(obj[i].status=="COMPLETED"){
            li.innerHTML ="<td><strike>"+obj[i].title+"</strike></td>";
            li.style.color = "green";
            li.innerHTML+="   <td><a style='color:black;cursor: pointer;' onclick='activate("+i+")'>Mark as Active</a></td>  <td><a style='color:red;cursor: pointer;' onclick='deletetodo("+i+")'>Delete</a> </td> ";
        }
        else if(obj[i].status=="DELETED"){
            li.innerHTML = "<td><strike>"+obj[i].title+"</strike></td>";
            li.style.color = "red";
            li.innerHTML+="   <td><a style='color:green;cursor: pointer;' onclick='complete("+i+")'>Mark as Complete</a></td>  <td><a style='color:black;cursor: pointer;' onclick='activate("+i+")'>Mark as Active</a></td>";

        }
        mytodoElement.appendChild(li);
    }
}
function complete(i) {
    var RESPONSE_DONE = 4;
    var xhr = new XMLHttpRequest();
    xhr.open('PUT','/api/todos/complete/'+i,true);
    xhr.onreadystatechange = function () {
        if(this.readyState==RESPONSE_DONE && this.status==200){
            var obj = JSON.parse(xhr.responseText);
            printlist(obj);
        }
    }
    xhr.send();
}
function activate(i) {
    var RESPONSE_DONE = 4;
    var xhr = new XMLHttpRequest();
    xhr.open('PUT','/api/todos/active/'+i,true);
    xhr.onreadystatechange = function () {
        if(this.readyState==RESPONSE_DONE && this.status==200){
            var obj = JSON.parse(xhr.responseText);
            printlist(obj);
        }
    }
    xhr.send();
}

function deletetodo(i) {
    var RESPONSE_DONE = 4;
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE','/api/todos/'+i,true);
    xhr.onreadystatechange = function () {
        if(this.readyState==RESPONSE_DONE && this.status==200){
            var obj = JSON.parse(xhr.responseText);
            printlist(obj);
        }
    }
    xhr.send();
}

function getMyList() {
    var RESPONSE_DONE = 4;
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/api/todos',true);
    xhr.onreadystatechange = function () {
        if(this.readyState==RESPONSE_DONE && this.status==200){
            var obj = JSON.parse(xhr.responseText);
            printlist(obj);
        }
    }
    xhr.send();
}

function addNew() {
    var title=document.getElementById("newtitle").value;
    document.getElementById("newtitle").value="";
    if(title!="" || title.trim()!=""){
        var RESPONSE_DONE = 4;
        var xhr = new XMLHttpRequest();
        xhr.open('POST','/api/todos',true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if(this.readyState==RESPONSE_DONE && this.status==200){
                var obj = JSON.parse(xhr.responseText);
                printlist(obj);
            }
        }
        xhr.send("title="+title);
    }
}