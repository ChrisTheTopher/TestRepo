document.getElementById('buttonTest').onclick = function() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => document.getElementById("demoDiv").innerHTML = json)
};