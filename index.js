let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
  if(inputField.value.trim() === "") {
    return;
  }
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener('click', function() {
    paragraph.style.textDecoration = "line-through";
    paragraph.style.color = "#c8dee8";
  });
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
});
});

function removeAll(){
    document.getElementById("toDoContainer").innerHTML = "";
}

document.querySelector("#inputField").addEventListener("keyup", event => {
  if(event.key !== "Enter") return;
  document.querySelector("#addToDo").click();
  event.preventDefault();
});
