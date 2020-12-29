

async function getText() {
  var myObject = await fetch("http://localhost:8080/RestApiPractising/webapi/student/get/2");
  var myText = await myObject.text();
  var object = JSON.parse(myText);
  var toShow = "First name: " + object.firstName + " | Last name: " + object.lastName + " | age: " + object.age; 
  document.getElementById("container").innerHTML = toShow;
}

window.onload = getText