//accepting value from user
//taking empty array
let arr = JSON.parse(localStorage.getItem("data")) || [];
function getData(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let department = document.getElementById("dept").value;
  let experience = document.getElementById("exp").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("number").value;

  //stroing data in object
  let obj = {
    name,
    id,
    department,
    experience,
    email,
    mobile,
  };
  //pushing this object into empty array
  arr.push(obj);
  console.log(arr);
  appenddata(arr);
  //storing this data into local storage with key name data
  localStorage.setItem("data", JSON.stringify(arr));
}
//appending Data
function appenddata(arr) {
  for (let i = 0; i < arr.length; i++) {
    var row = document.createElement("tr");

    var col1 = document.createElement("td");
    col1.innerText = arr[i].name;

    var col2 = document.createElement("td");
    col2.innerText = arr[i].id;

    var col3 = document.createElement("td");
    col3.innerText = arr[i].department;

    var col4 = document.createElement("td");
    col4.innerText = arr[i].experience;

    var col5 = document.createElement("td");
    col5.innerText = arr[i].email;

    var col6 = document.createElement("td");
    col6.innerText = arr[i].mobile;

    var col7 = document.createElement("td");
    col7.innerText = roleget(arr[i].experience);

    var col8 = document.createElement("td");
    col8.innerText = "Delete";
    col8.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
  }
  row.append(col1, col2, col3, col4, col5, col6, col7, col8);
  document.querySelector("tbody").append(row);
}

function roleget(exp) {
  if (exp > 5) {
    return "Senior";
  } else if (exp > 2 && exp < 5) {
    return "Junior";
  } else if (exp <= 1) {
    return "Trainee";
  }
}
