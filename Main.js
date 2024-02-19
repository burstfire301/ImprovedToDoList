function initializePage() {
  addListenerToList();
  showMorningRoutine();
}

function addListenerToList() {
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("active");
      }
    },
    false
  );
}

function showMorningRoutine() {
  // change background color
  document.body.className = "bg-primary-subtle";

  // change header text
  document.getElementById("main-page-title").innerText = "Morning Routine";

  // change document title
  document.title = "Morning Routine";

  // clear the list
  const ul = document.getElementById("routine-list");
  ul.innerHTML = "";

  // add items to list
  addItemToList("get up");
  addItemToList("turn on pc");
  addItemToList("drink water");
  addItemToList("shower");
  addItemToList("teeth");
}

function showNightTimeRoutine() {
  // change background color
  document.body.className = "bg-danger-subtle";

  // change header text
  document.getElementById("main-page-title").innerText = "Night-Time Routine";

  // change document title
  document.title = "Night-Time Routine";

  // clear the list
  const ul = document.getElementById("routine-list");
  ul.innerHTML = "";

  // add items to list
  addItemToList("dishes");
  addItemToList("brush teeth");
  addItemToList("diary");
  addItemToList("go to bed");
}

function showGetHomeRoutine() {
  // change background color
  document.body.className = "bg-warning-subtle";

  // change header text
  document.getElementById("main-page-title").innerText = "Get Home Routine";

  // change document title
  document.title = "Get Home Routine";

  // clear the list
  const ul = document.getElementById("routine-list");
  ul.innerHTML = "";

  // add items to list
  addItemToList("wash hands");
  addItemToList("drink water");
  addItemToList("check calendar");
  addItemToList("social media");
  addItemToList("unpack bag");
  addItemToList("wash face");
}

function addItemToList(value) {
  // create a new list item
  var li = document.createElement("li");

  // add bootstrap styling
  li.className = "row list-group-item";

  // create a label
  var label = document.createElement("label");
  label.innerText = value;
  label.className = "form-check-label col-6";

  // create a close button
  var button = document.createElement("button");
  button.className = "btn-close col-4";

  // create a checkbox
  //<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
  var checkbox = document.createElement("input");
  checkbox.className = "form-check-input me-1";
  checkbox.id = "checkbox";
  checkbox.type = "checkbox";

  // add functionality to close button
  button.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };

  // add close button and label
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);

  // add list item to list
  document.getElementById("routine-list").appendChild(li);
}

// Create a new list item when clicking on the "Add" button
function newElementFromAdd() {
  var inputValue = document.getElementById("myInput").value;

  if (inputValue !== "") {
    addItemToList(inputValue);
    document.getElementById("myInput").value = "";
  }
}
