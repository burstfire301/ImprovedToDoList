const completedToDoItemColor = "#82ed88";
const notCompletedToDoItemColor = "#cccccc";

const morningRoutineItems = [
  "turn pc on",
  "drink water",
  "meds",
  "chores",
  "weather",
  "check calendar",
  "breakfast",
  "due dates",
  "clean room and make bed",
  "meal prep",
  "pack bag",
  "dishes",
  "cold shower",
  "teeth",
  "hair",
  "social media",
  "get dressed",
];

const nightTimeRoutineItems = [
  "raise desk",
  "meds2",
  "check tomorrow calendar",
  "unpack bag",
  "clean room and make bed",
  "meal prep",
  "dishes",
  "pack for tomorrow",
  "creatine",
  "teeth and wash face",
  "diary entry",
  "gratitude",
  "philosophy",
  "social media",
  "moisturize",
  "set alarm",
  "charge headphones",
];

const getHomeRoutineItems = [
  "wash hands",
  "drink water",
  "check calendar",
  "remove stuff from lounge/kitchen",
  "unpack bag",
  "clean room and make bed",
  "food",
  "wash face/shower",
  "teeth",
  "social media",
  "record washing",
  "home clothes",
  "hair",
];

function initializePage() {
  addListenerToList();
  showMorningRoutine();
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
  morningRoutineItems.forEach((item) => addItemToList(item));
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
  nightTimeRoutineItems.forEach((item) => addItemToList(item));
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
  getHomeRoutineItems.forEach((item) => addItemToList(item));
}

function addItemToList(value) {
  // create a new list item
  var li = document.createElement("li");
  li.style.backgroundColor = "#cccccc";

  // add bootstrap styling
  li.className = "row list-group-item";

  // create a label
  var label = document.createElement("label");
  label.innerText = value;
  label.className = "form-check-label col-6";

  // create a close button
  var button = document.createElement("button");
  button.className = "btn-close";

  // create a checkbox
  var checkbox = document.createElement("input");
  checkbox.className = "form-check-input";
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

function addListenerToList() {
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      // if click on list item
      if (ev.target.tagName === "LI") {
        // if item was already completed
        if (ev.target.querySelector("#checkbox").checked) {
          // set status color to 'not completed'
          ev.target.style.backgroundColor = notCompletedToDoItemColor;
          // if item was not already completed
        } else {
          // set status color to 'completed'
          ev.target.style.backgroundColor = completedToDoItemColor;
        }
        // toggle checkbox 'checked' state
        ev.target.querySelector("#checkbox").checked =
          !ev.target.querySelector("#checkbox").checked;
        // if click on checkbox
      } else if (ev.target.id === "checkbox") {
        if (!ev.target.parentElement.querySelector("#checkbox").checked) {
          ev.target.parentElement.style.backgroundColor =
            notCompletedToDoItemColor;
        } else {
          ev.target.parentElement.style.backgroundColor =
            completedToDoItemColor;
        }
        // if click on any other child of list item
      } else if (ev.target.parentElement.tagName === "LI") {
        if (ev.target.parentElement.querySelector("#checkbox").checked) {
          ev.target.parentElement.style.backgroundColor =
            notCompletedToDoItemColor;
        } else {
          ev.target.parentElement.style.backgroundColor =
            completedToDoItemColor;
        }
        ev.target.parentElement.querySelector("#checkbox").checked =
          !ev.target.parentElement.querySelector("#checkbox").checked;
      }
    },
    false
  );
}
