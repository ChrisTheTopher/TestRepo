document.getElementById('buttonTest').onclick = function() {
const funcTest = async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let users = await response.json()
    document.getElementById("demoDiv").innerHTML = JSON.stringify(users.title + " | " +users.id)
}
funcTest();
};
