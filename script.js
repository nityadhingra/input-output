function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.stopPropagation()
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  console.log(data)
  event.target.parentElement.appendChild(document.getElementById(data));
  console.log(event.target)
  


}


